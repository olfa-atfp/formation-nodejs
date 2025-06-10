const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controllers");

router.get("/all", todoController.getALLTodos);
router.get("/search/:id", todoController.getTodo);
router.get("/filter", todoController.filterTodos);
router.post("/add", todoController.createTodo);
router.put("/edit/:id", todoController.updateTodo);
router.delete("/delete/:id", todoController.deleteTodo);

module.exports = router;