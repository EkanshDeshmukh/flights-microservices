const express = require("express");
const { IndexController } = require("../../controllers");
const router = express.Router();

router.get('/info',IndexController.info)


module.exports = router