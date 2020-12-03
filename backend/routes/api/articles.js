const express = require('express');
const router = express.Router();

const Article = require('../../models/Article');
// const
// @route Get api/articles


// All Articles
router.get('/', (req,res) => {
  Article.find()
    .sort({ date: -1 })
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json("Error: " + err));
})

// Create Article
router.post('/new', (req, res) => {
  const newArticle = new Article({
    username: req.body.username,
    title: req.body.title,
    body: req.body.body
  });
  newArticle.save().then(article => res.json(article));
});

//Delete Article :id
router.delete("/:id", (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(article => article.remove().then(() => res.json('Article has been deleted')))
    .catch(err => res.status(404).json('It didnt delete'))
})
// Show 
router.get("/:id", (req, res) => {
  Article.findOne(req.params.id)
    .then((foundArticle) => {
      res.json({ article: foundArticle })
    }).catch((err) => {
      console.log("Error in article.show:", err);
      res.json({ Error: "Unable to get data" });
    })
});
//Update
router.put("/update/:id", (req, res) => {
  Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedArticle) => {
      if (err) console.log("The error in update article is:", err);

      res.json({ article: updatedArticle });
    }
  );
});

module.exports = router