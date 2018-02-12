const path = require('path');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const config = require('../config');
const jwt = require('jsonwebtoken');

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

router.post('/login',(req,res)=>{
      User.getByEmail(req.body.email,(err,user)=>{
        if(!user){
          res.json({success:false,email_err:true,message:'Email is not registered yet!'});
        }
        else{
          User.comparePassword(req.body.password,user.password,(err, isMatch)=>{
              if(isMatch) {
                  const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800 // 1 week
                  });
                  res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                      id: user._id,
                      name: user.name,
                      username: user.username,
                      email: user.email
                    }
                  })
                  }
              else {
                return res.json({success: false, message: 'Wrong password'});
    }
          });
        }
      });
    });



module.exports = router;
