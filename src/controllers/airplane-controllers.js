const { StatusCode } = require("http-status-code");

const { AirplaneService } = require("../services");

/** 
 * POST : /airplane
 * req-body : {modelNumber : '' , capacity :}
 
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully create an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating an airplane",
      data: {},
      error:error,
    });
  }
}

module.exports = {
  createAirplane,
};
