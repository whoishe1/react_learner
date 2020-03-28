import React, { Component } from "react";
import axios from "axios";
import BookList from "./BookList";
import BookInput from "./BookInput";

const GOOGLEBOOKS_ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";

export default class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      book: "Harry Potter",
      message: "",
      errorMessage: "",
      loading: false,
      regexp: /^(?!\s*$).+/
    };
  }

  handleChange = event => {
    if (
      event.target.value === "" ||
      this.state.regexp.test(event.target.value)
    ) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.book) {
      this.setState({ book: this.state.book, loading: true });
      this.searchBook();
    }
  };

  searchBook = async () => {
    const query = this.state.book;
    const book = `${GOOGLEBOOKS_ENDPOINT}${query}`;

    try {
      const response = await axios.get(book);
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.setState({ loading: false });

      if (response.data.totalItems > 0) {
        this.setState({ data: response.data.items });
      } else {
        this.setState({
          data: [],
          message: `No results found for this ${query}`
        });
      }
    } catch (error) {
      this.setState({ errorMessage: error });
    }
  };

  componentDidMount = () => {
    this.searchBook();
  };

  render() {
    const bookResults = this.state.data.map(item => (
      <BookList
        key={item.id}
        title={item.volumeInfo.title}
        link={item.volumeInfo.infoLink}
        description={item.volumeInfo.description}
        image={
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail
        }
        categories={item.volumeInfo.categories}
      />
    ));
    return (
      <div className="App">
        <h1>Books App</h1>
        <BookInput
          handleSubmit={this.handleSubmit}
          value={this.state.book}
          handleChange={this.handleChange}
        />
        <h4>{this.state.data.length ? null : this.state.message}</h4>
        <h4>{this.state.loading && "Loading..."}</h4>
        {bookResults}
      </div>
    );
  }
}
