const config = require('../config');
const mongoose = require('mongoose');
const conn = mongoose.createConnection(config.posts_db.link);

const NewPost = mongoose.Schema({
  head: {
   type: String,
   required: true
 },
 topic: {
   type: String,
   required: true
 },
 img_name: {
   type: String,
   required: true
 },
 text: {
   type: String,
   required: true
 },
 date: {
			type: Date,
			default: Date.now
		}
});

const Post = module.exports = conn.model('Post', NewPost);

module.exports.findLast = (count)=>{
  var query = Post.find().sort({_id:1}).limit(count);
  query.exec((err,result)=>{
    if(err) return err;
    return result;
  });
};
