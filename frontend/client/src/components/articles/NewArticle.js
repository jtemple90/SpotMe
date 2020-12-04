import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Logo from "../../images/logo.png";
import './NewArticle.css'
class NewArticle extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      title: "",
      body: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  onChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  onChangeBody(event) {
    this.setState({
      body: event.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const article = {
      username: this.state.username,
      title: this.state.title,
      body: this.state.body,
      date: this.state.date,
    };
    console.log(article);

    axios
      .post("http://localhost:4000/api/articles/add", article)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    window.location = "/articles";
  }

  render() {
    return (
      <div>
        <h3>New Article!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group1">
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group1">
            <input
              placeholder="Enter Title..."
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group1">
            <textarea
              placeholder="Article content..."
              type="text"
              className="form-control"
              value={this.state.body}
              onChange={this.onChangeBody}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Post Article"
              className="btn btn-primary"
            />
          </div>
        </form>
        {/* <div>
          <img className="landlogo1" src={Logo} alt="Logo" />
          <br />
          <p className="landp1">The Ultimate Workout Partner</p>
        </div> */}
      </div>
    );
  }
}
export default NewArticle;
