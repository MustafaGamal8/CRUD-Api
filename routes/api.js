const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');
const getCollectionMW = require('../middlewares/GetCollectionMW');


router.get('/:collection',getCollectionMW , ApiController.get );
router.post('/:collection', getCollectionMW, ApiController.post );
// router.put('/:collection', ApiController.GetCollection );
// router.delete('/:collection', ApiController.GetCollection );




module.exports = router