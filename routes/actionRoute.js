const express = require("express");
const router = express.Router();
const Action = require("../models/actionModel");
const {
  getAction,
  getActionById,
  createAction,
  updateAction,
  deleteAction,
} = require("../controllers/actionControllers");

router.get("/get-all", getAction); // get all action
router.get("/get/:id", getActionById); // get action by id
router.post("/create", createAction); // create action
router.put("/update/:id", updateAction); // update action
router.delete("/delete/:id", deleteAction); // delete action
module.exports = router;
