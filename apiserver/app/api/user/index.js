const router = require('express').Router();
const ctrl = require('./user.ctrl');

router.get('', ctrl.index);
router.get('/:id', ctrl.show);
router.post('', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.destory);

module.exports = router;
