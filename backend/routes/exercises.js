const router = require('express').Router();
const ctrl = require('../controllers');

// ROUTES
router.get('/', ctrl.exercises.index);
// router.get('/:id', ctrl.exercises.show);
// router.post('/', ctrl.exercises.create);
// router.put('/:id', ctrl.exercises.update);
// router.get('/:id', ctrl.exercises.destroy);

module.exports = router;