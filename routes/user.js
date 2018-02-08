const path = require('path');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

router.post('/reg',(req,res)=>{
  if(!req.body.email){
    res.json({success:false,message:'No data!'});
  }
  else {
    var query = {"email":req.body.email};
    User.findOne(query,(err,got)=>{
      if(!got){
        var newUser = new User ({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password
        });
        User.saveNew(newUser,(err,user)=>{
          if(err) res.json({success:false,message:'Sometyng gona wrong!'});
          else res.json({success:true,message:'You were registered!'});
        });
      }
      else {
        res.json({success:false,email_err:true,message:'Email is already registered!'});
      }
    });
  }
});

module.exports = router;
