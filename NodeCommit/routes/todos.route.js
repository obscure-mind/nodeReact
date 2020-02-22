const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

// Require the controllers WHICH WE DID NOT CREATE YET!!
// var product_controller = require('../controllers/product');


// a simple test url to check that all of our files are communicating correctly.
// router.get('/test', product_controller.test);

// router.post('/create', product_controller.product_create);

router.post("/", todoController.createTodoFunction);
router.get("/", todoController.getAllTodoFunction);
router.get("/:id", todoController.getTodoByIDFunction);
router.patch("/:id", todoController.updateTodoByIDFunction);
router.delete("/", todoController.deleteTodosFunction);
router.delete("/:id", todoController.deleteTodoFunction);

// update(put, patch), delete all/one
// 

module.exports = router;


















// const express = require('express');
// const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
// const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
// router.get('/test', product_controller.test);

// router.post('/create', product_controller.product_create);

// module.exports = router;
