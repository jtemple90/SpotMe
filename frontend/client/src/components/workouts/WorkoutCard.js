import React from "react";
import { Link } from "react-router-dom";
import "./WorkoutCard.css";

const Workout = (props) => (
  <div className="col-md-4 allcard">
    <div className="card mb-4 cards">
      <img
        src={`https://robohash.org/${props.workout.username}.png`}
        className="card-img-top"
        alt="Jane Doe"
        width="80"
      />
      <div className="innercard">
        <div className="card-body">
          <h2 className="card-title">{props.workout.title}</h2>
          <h6 className="card-text username">{props.workout.username}</h6>
          <p className="card-text content">{props.workout.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group buttons">
              <Link
                to={`/workouts/update/${props.workout._id}`}
                className="btn btn-edit float edit"
              >
                Edit
              </Link>
              <button
                className="btn btn-delete float-left delete"
                onClick={() => {
                  props.deleteWorkout(props.workout._id);
                }}
              >
                Delete
              </button>
            </div>
            {/* //==============Format date=============== */}
            {/* <small className="text-muted">{props.workout.date.format()}</small> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Workout;
