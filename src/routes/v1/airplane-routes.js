const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");

const router = express.Router();

//api/v1/airplane POST

router.post("/",
  AirplaneMiddleware.validateCreateRequest,
  AirplaneController.createAirplane
);

module.exports = router;
