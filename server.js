const express = require('express');
require 
const app = express();
const port = process.env.PORT || 80;
const host = '0.0.0.0';

app.listen(port, host, () => console.log(`listening on port ${port}`));
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })