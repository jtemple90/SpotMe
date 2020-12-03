import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class Articles extends Component {
  constructor(props) {
    super(props);

    this.deleteArticle = this.deleteArticle.bind(this)

    this.state = {articles: []}
  }

  componentDidMount() {
    axios.get('https://localhost:4000/api/articles/')
    .then(res => {
      this.setState({ articles : res.data })
    }).catch(err => console.log(err))
  }

  deleteArticle(id) {
    axios.delete("https://localhost:4000/api/articles/"+ id)
      .then(res => console.log(res.data))
    this.setState({
      articles : this.state.articles.filter(el => el._id != id)
    })
  }

  render(){
    return (
      <p>All Articles Component</p>
    )}
}
export default Articles