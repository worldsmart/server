const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const config = require('./config');

const app = express();

const port = 80;

app.use(bodyparser.json());

mongoose.connect(config.users_db.link);
mongoose.connection.on('error',()=>{
  console.log('Can not connect to db: '+config.users_db.name);
});
mongoose.connection.on('open',()=>{
  console.log('Connected to db: '+config.users_db.name);
});

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'err404')));

const user_link = require('./routes/user');
app.use('/user',user_link);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'err404','404.html'));
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','index.html'));
});

app.listen(port,()=>{
  console.log('Server started on port: '+port);
});
