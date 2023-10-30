const express = require('express');
const router = express.Router();
const CollectionController = require('../controllers/CollectionController');



router.get("/" ,CollectionController.SendForm)
router.post("/submit" ,CollectionController.createCollection)




module.exports = router