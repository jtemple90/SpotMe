import React, { Component } from "react";
import axios from "axios";
import "./Register.css";
import Logo from "../../images/logo.png";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    };
  }
  

  onChangeFirstName(e) {
    this.setState({
      fistName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      Name: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
    };

    console.log(user);

    axios
      .post("http://localhost:4000/api/users/add", user)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
    // add an onSuccess redirect to home
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              placeholder="First Name"
              type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
            <input
              placeholder="Last Name"
              type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
            <input
              placeholder="Create a username"
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <input
              placeholder="Enter Email..."
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />

            <input
              placeholder="Enter a password"
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
        <p className="register__login--link">
          Already have an account?&nbsp;<a href="/login">Click Here </a>&nbsp;to login!
        </p>
      </div>
    );
  }
}
export default NewUser;
