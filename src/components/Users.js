import React, { Component } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";

const USERDATA_ENDPOINT = "https://randomuser.me/api/?results=25";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      errorMessage: ""
    };
  }

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = async () => {
    try {
      const response = await axios.get(USERDATA_ENDPOINT);
      this.setState({ userData: response.data.results });
    } catch (error) {
      this.setState({ errorMessage: error });
    }
  };

  handleDelete = id => {
    this.setState({
      userData: this.state.userData.filter(item => item.login.uuid !== id)
    });
  };

  render() {
    const profileStyles = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      backgroundColor: "teal"
    };

    const userList = this.state.userData.map(item => (
      <UserProfile
        key={item.login.uuid}
        image={item.picture.large}
        nation={item.nat}
        firstname={item.name.first}
        lastname={item.name.last}
        gender={item.gender}
        city={item.location.city}
        state={item.location.state}
        country={item.location.country}
        email={item.email}
        deleteUser={() => this.handleDelete(item.login.uuid)}
      />
    ));
    return (
      <div className="container" style={profileStyles}>
        {userList}
      </div>
    );
  }
}
