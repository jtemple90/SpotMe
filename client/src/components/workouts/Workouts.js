import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Workout from "./Workout-Card/WorkoutCard";
import "./Workouts.css";
import CornerLogo from "../Corner_logo/CornerLogo";

class Workouts extends Component {
  constructor(props) {
    super(props);

    this.deleteWorkout = this.deleteWorkout.bind(this);

    this.state = { workouts: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3500/workouts/")
      .then((res) => {
        this.setState({ workouts: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteWorkout(id) {
    axios
      .delete("http://localhost:3500/workouts/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.setState({
      workouts: this.state.workouts.filter((el) => el._id !== id),
    });
  }

  workoutList() {
    return this.state.workouts.map((currentWorkout) => {
      return (
        <Workout
          workout={currentWorkout}
          deleteWorkout={this.deleteWorkout}
          key={currentWorkout._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="">
        <CornerLogo />
        <div className="workouts__container">
          <h3 className="workouts__header">All Your Workouts</h3>
          <div className="workout__cards">{this.workoutList()}</div>
        </div>
      </div>
    );
  }
}
export default Workouts;
