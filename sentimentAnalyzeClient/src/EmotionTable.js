import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <table className="table table-bordered">
          <tbody>
            {
              Object.entries(this.props.emotions.result.emotion.document.emotion).map((mapEntry) => {
                return (
                  <tr>
                    <td>{mapEntry[0]}</td>
                    <td>{mapEntry[1]}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default EmotionTable;
