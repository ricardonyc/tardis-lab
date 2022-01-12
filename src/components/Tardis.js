import React, { Component } from "react";
import DivOne from "./DivOne";

class Tardis extends Component {
  constructor() {
    super();
    this.state = {
      name: "Time and Relative Dimension in Space",
      caps: false,
    };
  }

  changeIt = (text) => {
    if (this.state.caps) {
      this.setState({
        name: text.toLowerCase(),
        caps: false,
      });
    } else {
      this.setState({
        name: text.toUpperCase(),
        caps: true,
      });
    }
  };

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.changeIt(this.state.name)}>Change</button>
      </div>
    );
  }
}

export default Tardis;
