const BudgetModel = require("../models/Data");

// Controller function for CRUD operations
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

exports.updateData = (req, res) => {
  // Implementation for updating data
};

exports.deleteData = (req, res) => {
  // Implementation for deleting data
};
