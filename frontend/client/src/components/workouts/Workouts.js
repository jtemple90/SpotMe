import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

const Workout = (props) => (
  <tr>
    {/* <td>{props.workout.username}</td> */}
    <td>{props.workout.title}</td>
    <td>{props.workout.description}</td>
    <td>{props.workout.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.workout._id}>edit</Link> | <a href="#" onClick={() => {props.deleteWorkout(props.workout._id);
        }}>delete</a>
    </td>
  </tr>
);

class Workouts extends Component {
  constructor(props) {
    super(props);

    this.deleteWorkout = this.deleteWorkout.bind(this);

    this.state = { workouts: [] };
  }

  componentDidMount() {
    axios
      .get("https://localhost:4000/api/workouts/")
      .then(res => {
        this.setState({ workouts: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteWorkout(id) {
    axios
      .delete("https://localhost:4000/api/workouts/" + id)
      .then(res => console.log(res.data));

    this.setState({
      workouts: this.state.workouts.filter(el => el._id != id),
    });
  }

  workoutList() {
    return this.state.workouts.map(currentworkout => {
      return (
        <Workout
          workout={currentworkout}
          deleteWorkout={this.deleteWorkout}
          key={currentworkout._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>All User Workouts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.workoutList()}</tbody>
        </table>
      </div>
    );
  }
}
export default Workouts