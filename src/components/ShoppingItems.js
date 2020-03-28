import React, { Component } from "react";

export default class ShoppingItems extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="shopping-list"
      >
        <div>{this.props.text},</div>
        &nbsp;
        <div>{this.props.id}</div>
        <div>{this.props.timestamp}</div>
        &nbsp;
        <div>
          <button onClick={this.props.deleteItem}>delete</button>
        </div>
      </div>
    );
  }
}
