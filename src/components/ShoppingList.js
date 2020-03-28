import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import ShoppingItems from "./ShoppingItems";

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingItems: []
    };
    this.addItem = this.addItem.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  addItem = item => {
    this.setState({
      shoppingItems: [...this.state.shoppingItems, item]
    });
  };

  handleDelete = id => {
    this.setState({
      shoppingItems: this.state.shoppingItems.filter(item => item.id !== id)
    });
  };

  render() {
    const shoppingInput = <ShoppingListForm addItems={this.addItem} />;
    const myShoppingItems = this.state.shoppingItems.map(item => (
      <ShoppingItems
        key={item.id}
        deleteItem={() => this.handleDelete(item.id)}
        // deleteItem={this.handleDelete(item.id)}
        timestamp={item.timestamp}
        text={item.text}
      />
    ));
    return (
      <div className="shopping-form">
        <h1>Shopping List</h1>
        <p>Please enter an item below:</p>
        {shoppingInput}
        <h4>My List:</h4>
        {myShoppingItems}
      </div>
    );
  }
}
