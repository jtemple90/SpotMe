const db = require('../models');

const index = (req, res) => {
  db.Article.find({})
    .then((foundArticles) => {
      console.log(foundArticles)
      res.json({ article: foundArticles })
    }).catch((err) => {
      console.log("The Error in the articles index is=============:", err);
      res.json({ err: "Unable to get articles data" });
    })
}

const create = (req, res) => {
  db.Article.create(req.body, (err, savedArticle) => {
    res.json({ article: savedArticle })
  }).catch((err) => {
    console.log("Error in article.create:", err);
    res.json({ Error: "Unable to get data" });
  })
}

const show = (req, res) => {
  db.Article.findById(req.params.id)
    .then((foundArticle) => {
      res.json({ article: foundArticle })
    }).catch((err) => {
      console.log("Error in article.show:", err);
      res.json({ Error: "Unable to get data" });
    })
}

const update = (req, res) => {
  db.Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new:true },
    (err, updatedArticle) => {
      if (err) console.log('The error in udpate article is:', err)

      res.json({ article: updatedArticle })
    })
}

const destroy = (req, res) => {
  db.Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
    if(err) console.log('Err in destroy article:', err)

    res.json({ article: deletedArticle })
  })
}

module.exports = { 
  index,
  create,
  show,
  update,
  destroy,
}