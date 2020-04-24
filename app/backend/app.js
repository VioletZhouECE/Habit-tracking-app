const express = require('express')
const path = require('path')

app = express();

//serve home.html
app.use(express.static("/Users/zhouchun/time_bank_app_node/app/frontend/template"));

//serve all static css, javascript and bundle files
app.use(express.static("/Users/zhouchun/time_bank_app_node/app/frontend"));

app.get( '/*', (req, res) => {
    res.redirect("/Users/zhouchun/time_bank_app_node/app/frontend/template/home.html")
})

app.listen(3000, '127.0.0.1');