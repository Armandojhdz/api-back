const express = require('express');
const router =  express.Router();

const radiobaseController = require('../controllers/radiobaseController');


router.get('/', radiobaseController.list);
router.get('/find/:id', radiobaseController.find);
module.exports = router;