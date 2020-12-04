import React from "react";
import { Link } from "react-router-dom";
import './ArticleCard.css'

const Article = (props) => (
  <div className="col-md-4 allcard">
    <div className="card mb-4 cards">
      <img
        src={`https://robohash.org/${props.article.username}.png`}
        className="card-img-top"
        alt="Jane Doe"
        width="100"
      />
      <div className="innercard">
        <div className="card-body">
          <h2 className="card-title">{props.article.title}</h2>
          <h6 className="card-text">{props.article.username}</h6>
          <p className="card-text content">{props.article.body}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group buttons">
              <Link
                to={`/articles/update/${props.article._id}`}
                className="btn btn-edit float edit"
              >
                Edit
              </Link>
              <button
                className="btn btn-delete float-left delete"
                onClick={() => {
                  props.deleteArticle(props.article._id);
                }}
              >
                Delete
              </button>
            </div>
            {/* //==============Format date=============== */}
            {/* <small className="text-muted">{props.article.date.format()}</small> */}
          </div>
        </div>
        {/* <h2 className="card-title">{props.article.title}</h2>
        <h6 className="card-text">{props.article.username}</h6>
        <p className="card-text">{props.article.body}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group buttons">
            <Link
              to={`/articles/update/${props.article._id}`}
              className="btn btn-edit float edit"
            >
              Edit
            </Link>
            <button
              className="btn btn-delete float-left delete"
              onClick={() => {
                props.deleteArticle(props.article._id);
              }}
            >
              Delete
            </button>
          </div>
          {/* //==============Format date=============== */}
          {/* <small className="text-muted">{props.article.date.format()}</small> */}
        {/* </div>  */}
      </div>
    </div>
  </div>
);

export default Article