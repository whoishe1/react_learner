import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      regexp: /^(?!\s*$).+/
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    if (
      event.target.value === "" ||
      this.state.regexp.test(event.target.value)
    ) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text !== "") {
      this.props.addItems({
        text: this.state.text,
        id: uuidv4(),
        timestamp: new Date().toLocaleString()
      });
      this.setState({
        text: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-submit">
        <input
          name="text"
          value={this.state.text}
          placeholder="Enter shopping item"
          onChange={this.handleChange}
        />
        <button type="submit">Add to Shopping list</button>
      </form>
    );
  }
}
