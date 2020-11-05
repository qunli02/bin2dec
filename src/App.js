import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    text: "",
    answer: "",
    error: false,
  };

  handleChange = (e) => {
    let newVal = e.target.value;
    let change = true;
    let i = 0;
    for (i = 0; i < newVal.length; i++) {
      if (newVal[i] === "0" || newVal[i] === "1") {
      } else {
        change = false;
        break;
      }
    }
    if (change) {
      this.setState({
        text: newVal,
        error: false,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    let bi = this.state.text;
    let dec = 0;
    let i = 0;
    for (i = 0; i < bi.length; i++) {
      let num = parseInt(2 ** (bi.length - 1 - i) * bi[i]);
      dec += num;
    }
    this.setState({
      answer: dec,
    });
  };

  render() {
    return (
      <div className="app">
        <form onKeyUp={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></input>
        </form>
        <br />
        Please enter a base 2 number to be converted to base 10 number
        <br />
        <p>
          {this.state.error ? "Please only enter 0 or 1" : this.state.answer}
        </p>
      </div>
    );
  }
}

export default App;
