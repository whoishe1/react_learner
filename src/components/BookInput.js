import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BookInput extends Component {
  render() {
    return (
      <div className="book-form">
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="book"
            value={this.props.value}
            onChange={this.props.handleChange}
            placeholder="Search your book!"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

BookInput.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};
