const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/get',(req,res)=>{
  res.json({lololo:'zzzz'});
});

module.exports = router;
