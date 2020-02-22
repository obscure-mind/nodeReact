const todoModel = require('../models/todo.model'); // import todoModel from '../models/todo.model'

const createTodoFunction = (req, res, next) => {
    todoModel.create(req.body)
        .then(data => {
            res.send(data)
        });
};
const getAllTodoFunction = (req, res, next) => {
    todoModel.find({})
        .then((data) => {
            res.send(data
                // .map(({ text, status, _id }) => ({ text, status, id: _id }))
            )
        })
}
const getTodoByIDFunction = (req, res, next) => {
    todoModel.findById(req.params.id)
        .then((data) => {
            res.send(data)
        })
}

const updateTodoByIDFunction = (req, res, next) => {
    todoModel.findByIdAndUpdate(req.params.id)
        .then((data) => {
            res.send(data)
        })
}

const deleteTodosFunction = (req, res, next) => {
    todoModel.deleteMany({})
        .then((data = null) => {
            res.send(data)
        })
}

const deleteTodoFunction = (req, res, next) => {
    todoModel.findByIdAndDelete(req.pqrams.id)
        .then()

}



module.exports = {
    createTodoFunction,
    getAllTodoFunction,
    getTodoByIDFunction,
    updateTodoByIDFunction,
    deleteTodosFunction,
    deleteTodoFunction

};

































// const Product = require('../models/product.model');

//Simple version, without validation or sanitation
// exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!!');
// };

// exports.product_create = function (req, res) {
//     let product = new Product(
//         {
//             name: req.body.name,
//             price: req.body.price
//         }
//     );

//     product.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('Product Created successfully')
//     })
// };
