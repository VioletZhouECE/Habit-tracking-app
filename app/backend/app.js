const express = require('express')
const path = require('path')

app = express();

//use jade to render the html template
app.set('view engine', 'jade')

//serve home.html
app.use(express.static("/Users/zhouchun/time_bank_app_node/app/frontend/template"));

//serve all static css, javascript and bundle files
app.use(express.static("/Users/zhouchun/time_bank_app_node/app/frontend"));

app.get( '/*', (req, res) => {
    res.render('index');
})

app.listen(3000, '127.0.0.1');