import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import Logo from "../../images/logo.png";
import Workout from "./WorkoutCard";



class Workouts extends Component {
  constructor(props) {
    super(props);

    this.deleteWorkout = this.deleteWorkout.bind(this);

    this.state = { workouts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/workouts/")
      .then(res => {
        this.setState({ workouts: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteWorkout(id) {
    axios
      .delete("http://localhost:4000/api/workouts/" + id)
      .then(res => console.log(res.data))
      .catch((err) => console.log(err))

    this.setState({
      workouts: this.state.workouts.filter(el => el._id !== id),
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
        <div className="album py-5">
          <div className="containera">
            <div className="row">{this.workoutList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Workouts