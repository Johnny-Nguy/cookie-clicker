import React from "react";
import style from './style';

class Cookie extends React.Component {
  state = {
    score: 0,
  };

  Add = () => {
    this.setState({ score: this.state.score + 1 });
  };

  Reset = () => {
    this.setState({ score: 0 });
  };

  render() {
    return (
      <div>
        // style.cookie calls cookie method from style.js
        <button style={style.cookie} onClick={this.Add}>
          <img
            src="https://famouscookies.com/wp-content/uploads/2020/11/Famous-Cookie-Cocolate-Chip-21-1600x1600-1.png"
            style={{ width: '500px', height: '500px' }}
            alt="Cookie can't be loaded :("
          />
        </button>
        // ... operator to apply additional stuff, sets location and size of label on page
        <div style={{ fontSize: '50px', ...style.label }}>
          clicks = {this.state.score}
        </div>
        // style.reset calls reset method from style.js
        <button style={style.reset} onClick={this.Reset}>
          Click to reset cookies
        </button>
      </div>
      // all buttons list its functions in the <> then what it displays after
    );
  }
}

export default Cookie;
