import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BookList extends Component {
  render() {
    return (
      <div
        key={this.props.id}
        className="book-results"
        style={{ textAlign: "left", paddingLeft: 50, paddingRight: 50 }}
      >
        <h3>
          <a
            style={{ color: "blue" }}
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
        </h3>
        <ul>
          <li
            style={{
              margin: 0,
              textAlign: "left",
              listStylePosition: "outside"
            }}
          >
            {this.props.description ? (
              this.props.description
            ) : (
              <i>Description not available</i>
            )}
          </li>
        </ul>
        <p>
          {this.props.categories ? (
            <i>Category: {this.props.categories}</i>
          ) : (
            <i>Category: not available</i>
          )}
        </p>
        <div style={{ display: "block" }}>
          {this.props.image ? (
            <img
              style={{ width: 150 }}
              src={this.props.image}
              alt={this.props.title}
            />
          ) : (
            <i>Image not available</i>
          )}
        </div>
        <br />
      </div>
    );
  }
}

BookList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  categories: PropTypes.array
};
