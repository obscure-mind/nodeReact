const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.post("/", todoController.createTodoFunction);
router.get("/", todoController.getAllTodoFunction);
router.patch("/:id", todoController.updateTodoByIDFunction);
router.patch("/", todoController.updateAllTodoFunction);
router.delete("/", todoController.deleteTodosFunction);
router.delete("/:id", todoController.deleteTodoFunction);
router.get("/:id", todoController.getTodoByIDFunction);

// update(put, patch)

module.exports = router;