const express = require("express");

const airplaneRoutes = require("./airplane-routes");

const router = express.Router();

router.use("/airplane", airplaneRoutes);

router.use("/airplanes", airplaneRoutes);

module.exports = router;
