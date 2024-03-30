const Action = require("../models/actionModel");
const asyncHandler = require("express-async-handler");
const getAction = asyncHandler(async (req, res) => {
  try {
    const action = await Action.find({});
    res.status(200).json(action);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
const getActionById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const action = await Action.findById(id);
    res.status(200).json(action);
  } catch (error) {
    res.status(500);
    throw new Error("fake error");
  }
});
const createAction = asyncHandler(async (req, res) => {
  try {
    const action = await Action.create(req.body);
    res.status(200).json(action);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
const updateAction = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const action = await Action.findByIdAndUpdate(id, req.body);
    if (!action)
      return res
        .status(404)
        .json({ message: `Cannot find any Action with Id ${id}` });
    const updatedAction = await Action.findById(id);
    res.status(200).json(updatedAction);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
const deleteAction = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const action = await Action.findByIdAndDelete(id);
    if (!action)
      return res
        .status(404)
        .json({ message: `Cannot find any Action with Id ${id}` });
    const updatedAction = await Action.findById(id);
    res.status(200).json(updatedAction);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getAction,
  getActionById,
  createAction,
  updateAction,
  deleteAction,
};
