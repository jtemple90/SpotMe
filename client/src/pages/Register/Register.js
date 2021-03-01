import React, { Component } from "react";
import axios from "axios";
import "./Register.css";
import CornerLogo from "../../components/Corner_logo/CornerLogo";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
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
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);

    axios
      .post("http://localhost:3500/users/add", user)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    this.setState({
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
        <CornerLogo />
        <h3>Create New User</h3>
        <form className="register__form" onSubmit={this.onSubmit}>
          <div className="register__form-content">
            <input
              placeholder="Create a username"
              type="text"
              required
              className="register__form-input"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <input
              placeholder="Enter Email..."
              type="text"
              required
              className="register__form-input"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />

            <input
              placeholder="Enter a password"
              type="password"
              className="register__form-input"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <input
              type="submit"
              value="Create User"
              className="register__form-submit"
            />
          </div>
        </form>
        <p className="register__login--link">
          Already have an account?&nbsp;<a href="/login">Click Here </a>&nbsp;to
          login!
        </p>
      </div>
    );
  }
}
export default NewUser;
