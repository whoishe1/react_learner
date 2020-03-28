import React, { Component } from "react";
import logo from "../logo.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="react-logo">
        <h2>React Learner</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
