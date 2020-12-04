import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './NewWorkout.css'
import Logo from "../../images/logo.png";

class NewWorkout extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      title: "",
      description: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
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
  onChangeDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const workout = {
      username: this.state.username,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    console.log(workout);

    axios
      .post("http://localhost:4000/api/workouts/add", workout)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    window.location = "/workouts";
  }

  render() {
    return (
      <div>
        <h3>Lets Build a Workout!</h3>
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
                  <option className="opt-dropdown" key={user} value={user}>
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
              placeholder="Enter Description..."
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group1">
            <label>Date: </label>
            <div className="datepicker">
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Workout"
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
export default NewWorkout;

