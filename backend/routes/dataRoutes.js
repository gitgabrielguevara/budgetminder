const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

// Routes for testing CRUD operations
router.post("/", dataController.createData);
router.get("/", dataController.getData);
router.put("/id", dataController.updateData);
router.delete("/id", dataController.deleteData);

module.exports = router;
