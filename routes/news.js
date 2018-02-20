const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Post = require('../models/newspost');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, Date.now() + file.originalname);
    }
});

var upload = multer({
                storage: storage
            });

router.post('/add', upload.single('file') , (req, res)=>{
  var newPost = new Post({
    head:req.body.header,
    topic:req.body.topic,
    img_name:req.file.filename,
    text:req.body.poststext
  });
  newPost.save((err)=>{
    if(!err){
      res.json({success:true});
    }
  });
});

router.post('/select',(req,res)=>{
  Post.find((err,data)=>{
    res.json(data);
  }).sort({date:-1}).limit(5);
});

module.exports = router;
