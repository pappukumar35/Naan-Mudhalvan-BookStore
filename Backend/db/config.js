// const mongoose = require("mongoose");
// // Middleware
// const MONGO_URI = 'mongodb+srv://elf:elf123@myprojects.inzgx1q.mongodb.net/BookStore?retryWrites=true&w=majority'
// // Connect to MongoDB using the connection string
// mongoose.connect(MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// }).then(() => {
//   console.log(`Connection successful`);
// }).catch((e) => {
//   console.log(`No connection: ${e}`);
// });

// // mongodb://localhost:27017 



const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://swethagit2021:swetha@cluster0.baqwk.mongodb.net/')
  .then(() => {
    console.log('Connection successful');
  })
  .catch((error) => {
    console.error('No connection:', error);
  });
