const router = require("router");
const ctrl = require("./controllers");

// ROUTES
router.get("/", ctrl.articles.index);
router.get("/:id", ctrl.articles.show);
router.post("/", ctrl.articles.create);
router.put("/:id", ctrl.articles.update);
router.get("/:id", ctrl.articles.destroy);

module.exports = router;
