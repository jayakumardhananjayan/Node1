
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config');
const postsRoute = require('./posts');
app.use('/posts', postsRoute);
//middleware
//app.use('/posts', () => {
  //  console.log("this is MW running")
//})

//ROUTEs

app.get('/', (req, res) => {
    res.send('we are on home');
});

//app.get('/posts', (req, res) => {
  //  res.send('we are on posts');
//});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () =>
    console.log('connected.DB')
);
//listening
app.listen(3000);
