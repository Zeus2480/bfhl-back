const { StatusCodes } = require("http-status-codes");
const { BfhlService } = require('../services');
const { BfhlValidator } = require('../validators');

const getBfhl = async (req, res) => {
  try {
    const response = await BfhlService.getOperationCode();
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const postBfhl = async (req, res) => {
  try {
    if (!BfhlValidator || typeof BfhlValidator.validatePostBfhl !== 'function') {
      throw new Error('Validator not properly initialized');
    }

    const validatedData = await BfhlValidator.validatePostBfhl(req.body);
    const response = await BfhlService.processBfhlData(validatedData);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.error('Error in postBfhl:', error); // Log the full error for debugging
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Invalid input",
      error: error.message,
    });
  }
};

module.exports = {
  getBfhl,
  postBfhl,
};
