const todoModel = require('../models/todo.model');

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