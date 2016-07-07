// var db = require('../config');
// var crypto = require('crypto');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;
var db = require('../config');
var mongoose = require('mongoose');
var crypto = require('crypto'); 

var LinkSchema = new mongoose.Schema({
  tableName: { type: String },
  hasTimestamps: Boolean,
  visits: Number
});


LinkSchema.methods.cryptofy = (url) => {
  var shasum = crpyto.createHash('sha1');
  shasum.save((err) => {
    if (err) {
      console.log(err);
    } 
    shasum.update('url');
    
    


  });
};


var Link = mongoose.model('url', LinkSchema);

module.exports = Link;