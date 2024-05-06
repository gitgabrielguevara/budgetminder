const BudgetModel = require("../models/Data");

// Controller functions for CRUD operations
exports.createData = async (req, res) => {
  try {
    const newData = await BudgetModel.create(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await BudgetModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateData = async (req, res) => {
  try {
    console.log("Received PUT request");
    const { id } = req.params;
    console.log("Received _id:", id); // Log the received _id
    const newData = req.body;
    const updatedData = await BudgetModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await BudgetModel.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
