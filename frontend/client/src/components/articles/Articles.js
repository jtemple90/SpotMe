import React, { Component } from "react";
import axios from "axios";
// import {Link} from 'react-router-dom'
import Logo from "../../images/logo.png";
import Article from './ArticleCard'

// const Article = (props) => (
//   <div className="col-md-4">
//     <div className="card mb-4 shadow-sm">
//       {/* Do this after presentations */}
//       {/* <img src={`https://robohash.org/${props.article.image}.png`} className="card-img-top" alt="Jane Doe" width="100" /> */}
//       <div className="card-body">
//         <h2 className="card-title">{props.article.title}</h2>
//         <h6 className="card-text">{props.article.username}</h6>
//         <p className="card-text">{props.article.body}</p>
//         <div className="d-flex justify-content-between align-items-center">
//           <div className="btn-group">
//             <Link
//               to={`/articles/update/${props.article._id}`}
//               className="btn btn-primary float-right"
//             >
//               View Details
//             </Link>
//             <button
//               className="btn btn-primary float-left"
//               onClick={() => {
//                 props.deleteArticle(props.article._id);
//               }}>
//               Delete
//             </button>
//           </div>
//           {/* //==============Format date=============== */}
//           {/* <small className="text-muted">{props.article.date.format()}</small> */}
//         </div>
//       </div>
//     </div>
//   </div>
// );
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
        {/* <div>
          <img className="landlogo1" src={Logo} alt="Logo" />
          <br />
          <p className="landp1">The Ultimate Workout Partner</p>
        </div> */}
      </div>
    );
  }
}
export default Articles