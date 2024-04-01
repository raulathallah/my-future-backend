const express = require("express");
const router = express.Router();
const {
  getAction,
  getActionById,
  createAction,
  updateAction,
  deleteAction,
} = require("../controllers/actionControllers");
const { check } = require("express-validator");

router.get("/get-all", getAction); // get all action
router.get("/get/:id", getActionById); // get action by id
router.post(
  "/create",
  [
    check("title").isString().withMessage("Need to input string value!"),
    check("description").isString().withMessage("Need to input string value!"),
  ],
  createAction
); // create action
router.put("/update/:id", updateAction); // update action
router.delete("/delete/:id", deleteAction); // delete action
module.exports = router;
