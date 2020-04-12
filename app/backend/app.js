const express = require('express')

app = express();

//app.set('view-engine', 'ejs');
app.use(express.static('../frontend/public'));

app.get('/*', (req, res)=> {
    res.render('/template/home.html')
});

app.listen(3000, '127.0.0.1');