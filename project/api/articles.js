const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// All Articles
router.get('/', (req,res) => {
  Article.find()
    .sort({ date: -1 })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json("Error: " + err))
})
// Create Article
router.post('/add', (req, res) => {
  const newArticle = new Article({
    username: req.body.username,
    title: req.body.title,
    body: req.body.body
  })
  newArticle.save().then(article => res.json(article))
})
//Delete Article :id
router.delete("/:id", (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(article => article.remove().then(() => res.json('Article has been deleted')))
    .catch(err => res.status(404).json('It didnt delete'))
})
// Show 
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update
router.post("/update/:id", (req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      article.username = req.body.username;
      article.title = req.body.title;
      article.body = req.body.body;
      article.date = Date.parse(req.body.date);

      article
        .save()
        .then(() => res.json("article updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router