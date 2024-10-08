const { Driver } = require("../models");

async function getAllDrivers(req, res) {
  try {
    const drivers = await Driver.findAll();

    res.status(200).json({
      status: "200",
      message: "Success get drivers data",
      isSuccess: true,
      data: { drivers },
    });
  } catch (error) {
    res.status(500).json({
      status: "500",
      message: "Failed to get drivers data",
      isSuccess: false,
      error: error.message,
    });
  }
}

module.exports = { getAllDrivers };
