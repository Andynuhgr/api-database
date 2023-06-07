const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', dataController.getAllData);
router.post('/', dataController.createData);
router.put('/:id', dataController.updateData);
router.get('/category/:category', dataController.getDataByCategory);

module.exports = router;
