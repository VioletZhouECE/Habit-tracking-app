const express = require('express');
const path = require('path');
const authRouter = require ('./routers/auth');

app = express();

//use jade to render the html template
app.set('view engine', 'jade')

//serve home.html
app.use(express.static("/Users/zhouchun/time_bank_app_node/app/frontend/template"));

//serve all static css, javascript and bundle files
app.use(express.static("/Users/zhouchun/time_bank_app_node/app/frontend"));

//for all the get request, return the home page and let react-router handle frontend rendering
app.get( '/*', (req, res) => {
    res.render('index');
})

//authRouter to handle authentication routing
app.post('/auth', authRouter);

//habitRouter to handle habit-related routing
//app.use('/habit', authRouter);

app.listen(3000, '127.0.0.1');