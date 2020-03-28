import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Books from "./components/Books";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { AppBar, Tabs, Tab } from "@material-ui/core";

const styles = {
  backgroundColor: "black",
  color: "white",
  inkBarStyle: { background: "black" }
};

export default class App extends Component {
  state = {
    value: ""
  };
  handleChange = value => {
    this.setState({ value });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar position={"sticky"}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              centered
              style={styles}
              TabIndicatorProps={{ style: { background: "black" } }}
            >
              <Tab
                label="Home"
                to="/"
                component={Link}
                value={this.state.value}
              />
              <Tab
                label="Assignment #1"
                to="/shoppinglist"
                component={Link}
                value={this.state.value}
              />
              <Tab
                label="Assignment #2"
                to="/Books"
                component={Link}
                value={this.state.value}
              />
            </Tabs>
          </AppBar>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/shoppinglist" component={ShoppingList} />
            <Route path="/books" component={Books} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
