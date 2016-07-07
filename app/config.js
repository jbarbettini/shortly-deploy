// var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;



var mongoose = require('mongoose'); 
// May be shortlydb below.
mongoose.connect('mongodb://localhost/shortly-deploy');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:')); // binding it to the console so that it reports for this particular error event 
db.once('open', function() {
  console.log('Mongodb connection is open!');
});

module.exports = db;



// var LinkSchema = new mongoose.Schema({
//   hasTimestamps: Boolean,
//   visits: Number,
//   code: String,
//   title: String,
//   baseUrl: String,
//   url: String
// });


