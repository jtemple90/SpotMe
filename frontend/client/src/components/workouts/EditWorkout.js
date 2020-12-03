import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditWorkout extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: this.username,
      title: "",
      description: "",
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/api/workouts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          title: response.data.title,
          description: response.data.description,
          date: new Date(response.data.date)
        });
      })
      .catch(function (error) {
        console.log(error);
      });

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

    axios.post("http://localhost:4000/api/workouts/update/" + this.props.match.params.id, workout)
      .then(res => console.log(res.data))
      .catch((error) => console.log(error));

    window.location = "/workouts";
  }

  render() {
    return (
      <div>
        <h3>Edit your workout!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: {this.state.username}</label>
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
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
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
        </form>
      </div>
    );
  }
}
export default EditWorkout;
