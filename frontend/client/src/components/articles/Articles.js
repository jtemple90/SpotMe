import React, { Component } from "react";
import axios from "axios";

import Logo from "../../images/logo.png";
import Article from './ArticleCard'
class Articles extends Component {
  constructor(props) {
    super(props);
    this.deleteArticle = this.deleteArticle.bind(this);

    this.state = { 
      articles: [] 
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/articles/")
      .then((res) => {
        console.log(res);
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
    return this.state.articles.map((currentArticle) => {
      return (
        <Article
          article={currentArticle}
          deleteArticle={this.deleteArticle}
          key={currentArticle._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="album py-5">
        <div className="containera">
          <div className="row">{this.articleList()}</div>
        </div> 
      </div>
    );
  }
}
export default Articles