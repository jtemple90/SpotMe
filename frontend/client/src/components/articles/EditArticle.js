import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Logo from "../../images/logo.png";

class EditArticle extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: this.username,
      title: "",
      body: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/articles/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          title: response.data.title,
          body: response.data.body,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get("http://localhost:4000/api/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
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

    axios.post("http://localhost:4000/api/articles/update/"+ this.props.match.params.id, article)
      .then(res => console.log(res.data))
      .catch(error => console.log(error))

    window.location = "/articles";
  }

  render() {
    return (
      <div>
        <h3>Edit your article</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: {this.state.username} </label>
          </div>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Body: </label>
            <input
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
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
          {/* <div>
            <img className="landlogo1" src={Logo} alt="Logo" />
            <br />
            <p className="landp1">The Ultimate Workout Partner</p>
          </div> */}
        </form>
      </div>
    );
  }
}
export default EditArticle;
