import React, { Component } from "react";

class StatesInClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello1"
    };
  }

  onChange() {
    this.setState = {
      message: "Thankks for clicking"
    };
  }

  render() {
    return (
      <div className="ankur">
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onChange()}>Click Me</button>
      </div>
    );
  }
}

export default StatesInClassComponent;
