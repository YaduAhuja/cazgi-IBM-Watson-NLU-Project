(this.webpackJsonpsentimentanalyzer=this.webpackJsonpsentimentanalyzer||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(2),c=n.n(i),o=n(18),r=n.n(o),a=(n(24),n(3)),l=n(4),u=n(6),d=n(5),m=(n(9),n(25),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return 200!==this.props.emotion.status?Object(s.jsx)("div",{children:this.props.emotion.statusText}):Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("table",{className:"table table-bordered",children:Object(s.jsx)("tbody",{children:Object.entries(this.props.emotions.result.emotion.document.emotion).map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t[0]}),Object(s.jsx)("td",{children:t[1]})]})}))})})]})}}]),n}(c.a.Component)),j=n(8),b=n.n(j),x=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(s.jsx)("textarea",{rows:"1",cols:"50",id:"textinput"}),mode:"url",sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,b.a.get(e).then((function(e){var n=e.data.result.sentiment.document;console.log(n),n="positive"===n.label?Object(s.jsx)("div",{style:{color:"green",fontSize:20},children:n.score}):"negative"===n.label?Object(s.jsx)("div",{style:{color:"red",fontSize:20},children:n.score}):Object(s.jsx)("div",{style:{color:"yellow",fontSize:20},children:n.score}),t.setState({sentimentOutput:n})}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,b.a.get(e).then((function(e){t.setState({sentimentOutput:Object(s.jsx)(m,{emotions:e.data})})})).catch((function(e){t.setState({sentimentOutput:Object(s.jsx)("div",{children:e})})}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(s.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),this.state.innercomp,Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(s.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(s.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(c.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),s(t),i(t),c(t),o(t)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),O()},9:function(t,e,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.c53d90c8.chunk.js.map