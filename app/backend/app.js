const express = require('express');
const bodyparser = require('body-parser')
const path = require('path');
const authRouter = require ('./routers/auth');

app = express();

app.use(bodyparser.json());

//use jade to render the html template
app.set('view engine', 'jade');

//serve home.html
app.use(express.static("/Users/zhouchun/time_bank_app_node/app/frontend/template"));

//serve all static css, javascript and bundle files
app.use(express.static("/Users/zhouchun/time_bank_app_node/app/frontend"));

//allow cross domain access
app.use((req, res, next) => {
   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

//for all the get request, return the home page and let react-router handle frontend rendering
app.get( '/*', (req, res) => {
    res.render('index');
})

//authRouter to handle authentication routing
app.use('/auth', authRouter);

//habitRouter to handle habit-related routing
//app.use('/habit', authRouter);

app.listen(3000, '127.0.0.1');