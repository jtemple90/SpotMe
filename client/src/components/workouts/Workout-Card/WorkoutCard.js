import React from "react";
import { Link } from "react-router-dom";
import "./WorkoutCard.css";
import Avatar from "../../../images/avatar-img.jpg";

const Workout = (props) => (
  <div className="workout__card-container container">
    <div className="workout__card-content">
      <img className="workout__card-image" src={Avatar} alt="" />
      <h6 className="workout__card-username">{props.workout.username}</h6>
      <h2 className="workout__card-title">{props.workout.title}</h2>
      {/* <div className="workout__card-info"> */}
      <p className="workout__card-desc">{props.workout.description}</p>
      {/* </div> */}

      <div className="workout__card-buttons">
        <Link
          to={`/workouts/update/${props.workout._id}`}
          className="workout__btn workout__btn-edit"
        >
          Edit
        </Link>
        <Link
          className="workout__btn workout__btn-delete"
          onClick={() => {
            props.deleteWorkout(props.workout._id);
          }}
        >
          Delete
        </Link>
      </div>
      {/* //==============Format date=============== */}
      <small className="text-muted workout__date">{props.workout.date}</small>
    </div>
  </div>
);

export default Workout;
