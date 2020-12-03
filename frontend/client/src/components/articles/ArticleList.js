import React, {Component} from 'react'
import { v4 as uuidv4 } from "uuid";
// import { Container, Button } from 'reactstrap';
// import exercises from '../../../../../backend/controllers/exercises';

/* eslint-disable */
class ArticleList extends Component {
  state = {
    articles: [
      {id: uuidv4(), title: 'article1', body:'This is the body'},
      {id: uuidv4(), title: 'article2', body:'This is the body'},
      {id: uuidv4(), title: 'article3', body:'This is the body'},
      {id: uuidv4(), title: 'article4', body:'This is the body'},
      {id: uuidv4(), title: 'article5', body:'This is the body'},
      {id: uuidv4(), title: 'article6', body:'This is the body'},
      {id: uuidv4(), title: 'article7', body:'This is the body'},
      {id: uuidv4(), title: 'article8', body:'This is the body'},
      {id: uuidv4(), title: 'article9', body:'This is the body'}
    ]
  }

  render() {
    const { articles } = this.state;
    return (
        <div className='container'>
          <button className='btn'
            color='primary'
            style={{marginBottom: '2rem'}}
            onClick={() => {
              const title = prompt('Enter a title')
              if(title) {
                this.setState(state => {
                  articles: [...state.articles, { id:uuidv4(), title}]
                })
              }
            }}
            >Add Article</button>
          <div>
            <ul className='articles-list'>
              {articles.map(({ id, title }) => {
                <li key={id}>{title}</li>;
              })}
          </ul>
          </div>
        </div>
      
    )
  }
}

export default ArticleList