const router = require("express").Router();
const ctrl = require("../controllers");

// ROUTES
router.get("/", ctrl.workouts.index);
router.get("/:id", ctrl.workouts.show);
router.post("/", ctrl.workouts.create);
router.put("/:id", ctrl.workouts.update);
router.get("/:id", ctrl.workouts.destroy);

module.exports = router;
