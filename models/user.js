const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  name: {
   type: String,
   required: true
 },
 email: {
   type: String,
   required: true
 },
 password: {
   type: String,
   required: true
 }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.saveNew = (data,callback)=>{
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(data.password, salt, (err, hash) => {
      if(err) throw err;
      data.password = hash;
      data.save(callback);
    });
  });
};
