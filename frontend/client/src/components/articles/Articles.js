import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Article = props => (
  <tr>
    <td>{props.article.username}</td>
    <td>{props.article.title}</td>
    {/* <td>{props.article.body}</td> */}
    {/* <td>{props.article.date.substring(0, 10)}</td> */}
    <td>
      <Link to={"/edit/" + props.article._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteArticle(props.article._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);
class Articles extends Component {
  constructor(props) {
    super(props);

    this.deleteArticle = this.deleteArticle.bind(this);

    this.state = { articles: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/api/articles/")
      .then(res => {
        console.log(res)
        this.setState({ articles: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteArticle(id) {
    axios
      .delete("http://localhost:4000/api/articles/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      articles: this.state.articles.filter((el) => el._id !== id),
    });
  }

  articleList() {
    return this.state.articles.map(currentarticle => {
      return (
        <Article
          article={currentarticle}
          deleteArticle={this.deleteArticle}
          key={currentarticle._id}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h3>All User articles</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{this.articleList()}</tbody>
        </table>
      </div>
    );
  }
}
export default Articles