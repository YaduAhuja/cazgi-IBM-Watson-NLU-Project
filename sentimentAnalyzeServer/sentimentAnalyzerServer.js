const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

function getNLUInstance() {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth')

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: api_key,
        }),
        serviceUrl: api_url,
    });

    return naturalLanguageUnderstanding;
}

const app = new express();
const NLUInstance = getNLUInstance();


app.use(express.static('client'))

const cors_app = require('cors');
const { response } = require('express');

app.use(cors_app());

app.get("/", (req, res) => {
    res.render('index.html');
});

const getAnalyseParams = (textORurl, isUrl, isSentiment) => {   
    let analyzeParams = {
        "features" : {
        }
    }
    if(isSentiment){
        analyzeParams["features"]["sentiment"] = {};
    }else{
        analyzeParams["features"]["emotion"] = {};
    }
    if(isUrl){
        analyzeParams["url"] = textORurl;
    }else{
        analyzeParams["text"] = textORurl;
    }
    
    // console.log(analyzeParams);
    return analyzeParams;

}

app.get("/url/emotion", (req, res) => {
    NLUInstance.analyze(getAnalyseParams(req.query.url,true, false))
    .then(resp => {
        return res.send(resp);
    }).catch(err =>{
        console.log(err);
    })
});

app.get("/url/sentiment", (req, res) => {
    NLUInstance.analyze(getAnalyseParams(req.query.url,true, true))
    .then((resp)=> {
        return res.send(resp);
    }).catch(err =>{
        console.log(err);
    })
});


app.get("/text/emotion", (req, res) =>{
    NLUInstance.analyze(getAnalyseParams(req.query.text,false, false))
    .then((response) => {
        res.send(response);
    }).catch(err =>{
        console.log(err);
    })
});

app.get("/text/sentiment", (req, res) => {
    NLUInstance.analyze(getAnalyseParams(req.query.text,false, true))
    .then((resp) => {
        return res.send(resp);
    }).catch(err => {
        console.log(err);
    })
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

