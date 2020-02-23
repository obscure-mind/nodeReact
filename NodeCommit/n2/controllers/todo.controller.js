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

const getTodoByIDFunction = async (req, res, next) => {
    try {
        const data = await todoModel.findById(req.params.id);
        res.send(data);
    } catch(e) {
        res.status(404).send('ID not valid')
    }
}

const updateTodoByIDFunction = (req, res, next) => {
    todoModel.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            res.send(data)
        })
        .catch((e) => {
            res.status(404).send('ID not valid')
        })
}

const deleteTodosFunction = (req, res, next) => {
    todoModel.deleteMany({checked: true})
        .then(() => {
            res.sendStatus(200)
        })
}

const deleteTodoFunction = (req, res, next) => {
    todoModel.findByIdAndDelete(req.params.id)
        .then(() => {
            res.sendStatus(200)
        })

}

const updateAllTodoFunction = (req, res, next) => {
    const status = req.body.checked;
    todoModel.updateMany({ checked: !status }, { checked: status })
        .then(() => {
            res.sendStatus(200)
        })
}

module.exports = {
    createTodoFunction,
    getAllTodoFunction,
    getTodoByIDFunction,
    updateTodoByIDFunction,
    deleteTodosFunction,
    deleteTodoFunction,
    updateAllTodoFunction,
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
