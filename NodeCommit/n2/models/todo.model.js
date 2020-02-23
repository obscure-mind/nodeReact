
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: { type: String, required: true, max: 100 },
    checked: { type: Boolean, default: false },
});


// Export the model
module.exports = mongoose.model('Todo', TodoSchema);



































// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


// mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {

//    if (err) throw err;

//    console.log('Successfully connected');

// });


// let MongoClient = require('mongodb').MongoClient;

// MongoClient.connect("mongodb://localhost:27017/todos", function (err, db) {

//      if(err) throw err;
//      console.log('DAAAAAAATAAAAAA');
//     });

    // let ProductSchema = new Schema({
    //     name: {type: String, required: true, max: 100},
    //     price: {type: Number, required: true},
    // });


    // // Export the model
    // module.exports = mongoose.model('Product', ProductSchema);

     //Write databse Insert/Update/Query code here..

    //  Task.collection('Persons', function (err, collection) {

    //     collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
    //     collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
    //     collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });



    //     Task.collection('Persons').count(function (err, count) {
    //         if (err) throw err;

    //         console.log("Total Rows:" + count);
    //     });
    // });





// // Установим подключение по умолчанию
// let mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB);
// // Позволим Mongoose использовать глобальную библиотеку промисов
// mongoose.Promise = global.Promise;
// // Получение подключения по умолчанию 
// let db = mongoose.connection;

// // Привязать подключение к событию ошибки  (получать сообщения об ошибках подключения)
// db.on('error', console.error.bind(console, 'MongoDB connection error:')); 


