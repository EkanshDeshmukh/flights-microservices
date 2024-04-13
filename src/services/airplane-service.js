const { StatusCodes } = require("http-status-codes");

const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(
        "Cannot create a new Airplane object ",
        StatusCodes.BAD_REQUEST
      );
    }
    throw new AppError(
      "Cannot create a new Airplane object ",
      StatusCodes.BAD_REQUEST
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot Fetch data of All the Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    throw new AppError(
      "Cannot Fetch Data of Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
};
