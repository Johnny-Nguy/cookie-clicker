import style from './style';
import React from "react";

class Cookie extends React.Component {
  state = {
    score: 0,
  };

  Add = () => {
    this.setState ({ score: this.state.score + 1 });
  }

  Reset = () => {
    this.setState ({score: 0});
  } 

  render() {
    return (  
      <div>
        <button style={style.cookie} onClick={this.Add}>
          <img 
            src="https://pbs.twimg.com/profile_images/1691979424923561984/IdhzQ7-H_400x400.jpg"
            style={{ width: '500px', height: '500px' }}  // Adjust the width and height here
            alt="cookie"
          />
        </button>
        <div>
          <font size="10" style={style.label}>
            wah-wahs = {this.state.score}
          </font>
        </div>
        <button style={style.reset} onClick={this.Reset}>
          Click to reset cookies
        </button>
      </div>
    );
  }
}

export default Cookie;

