import React, { Component } from "react";
import male from "../assets/male.svg";
import female from "../assets/female.svg";
import usa from "../assets/usa.png";

export default class UserProfile extends Component {
  render() {
    const userStyles = {
      backgroundColor: "#f2f2f2",
      width: 350,
      margin: 20,
      textAlign: "center",
      borderRadius: 20,
      padding: 20
    };
    const imgStyle = {
      borderRadius: 50
    };

    const genderStyle = {
      textTransform: "capitalize"
    };

    const iconStyle = {
      width: 28,
      height: 28
    };

    const flag = {
      width: 40
    };

    return (
      <div className="user-profile" style={userStyles}>
        <img
          className="user-profile-img"
          src={this.props.image}
          alt="Dating Profile"
          style={imgStyle}
        />

        <h3 className="user-profile-name">
          {this.props.firstname} {this.props.lastname}{" "}
          {this.props.nation === "US" ? (
            <img src={usa} alt="United States" style={flag} />
          ) : null}
        </h3>

        <p className="user-profile-gender" style={genderStyle}>
          {this.props.gender}

          {this.props.gender === "male" ? (
            <img src={male} alt="Male" style={iconStyle} />
          ) : (
            <img src={female} alt="Female" style={iconStyle} />
          )}
        </p>

        <div className="user-profile-location">
          <p>
            {this.props.city}, {this.props.state}, {this.props.country}
          </p>
        </div>

        <p className="user-profile-email">{this.props.email}</p>
        <button onClick={this.props.deleteUser}>Delete</button>
      </div>
    );
  }
}
