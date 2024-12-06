const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/get", getTasks); // For retrieving tasks
router.post("/add", createTask); // For adding a new task
router.put("/update/:id", updateTask); // For updating an existing task
router.delete("/delete/:id", deleteTask); // For deleting a task

module.exports = router;
