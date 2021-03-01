import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import Logo from "../../images/logo.png";
import CornerLogo from "../../components/Corner_logo/CornerLogo";

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
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
      password: this.state.password,
    };

    console.log(user);

    axios
      .get("http://localhost:3500/api/users/:id", user)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    this.setState({
      username: "",
      password: "",
    });
    // add an onSuccess redirect to home
    window.location = "/";
  }

  render() {
    return (
      <div>
        <CornerLogo />
        <h3>LOGIN TO SPOTME!</h3>
        <form className="login__form" onSubmit={this.onSubmit}>
          <div className="login__form-content">
            <input
              placeholder="Enter username"
              type="text"
              required
              className="login__form-input"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />

            <input
              placeholder="Enter a password"
              type="password"
              className="login__form-input"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <input
              type="submit"
              value="Submit"
              className="login__form-submit"
            />
          </div>
        </form>
        <p className="register__login--link">
          No Account?&nbsp;<a href="/register">Click Here </a>&nbsp;to register!
        </p>
      </div>
    );
  }
}
export default NewUser;
