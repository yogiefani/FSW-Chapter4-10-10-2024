const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const carController = require("../controller/carController");
const sparepartController = require("../controller/sparepartController");

// root check
router.get("/", userController.healthCheck);

// API for get all users data
router.get("/api/v1/users", userController.getAllUser);

// API for get user data by id
router.get("/api/v1/users/:id", userController.getUserById);

// API for delete user data by id
router.delete("/api/v1/users/:id", userController.deleteUserById);

// API for update data by id
router.patch("/api/v1/users/:id", userController.UpdateUserById);

// API for create new user data
router.post("/api/v1/users", userController.createUser);

// Cars API
router.post("/api/v1/cars", carController.createCar);
router.get("/api/v1/cars", carController.getAllCars);
router.get("/api/v1/cars/:id", carController.getCarById);
router.delete("/api/v1/cars/:id", carController.deleteCarById);
router.patch("/api/v1/cars/:id", carController.updateCar);

// Spareparts API
router.post("/api/v1/spareparts", sparepartController.createSparepart);
router.get("/api/v1/spareparts", sparepartController.getAllSpareparts);
router.get("/api/v1/spareparts/:id", sparepartController.getSparepartById);
router.delete(
  "/api/v1/spareparts/:id",
  sparepartController.deleteSparepartById
);
router.patch("/api/v1/spareparts/:id", sparepartController.updateSparepart);

module.exports = router;
