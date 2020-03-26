import express from 'express'

app = express();

app.set('view-engine', 'ejs');

app.get('/', (res, res)=> {
    res.render('../frontend/template/home.js')
});

app.listen(3000);