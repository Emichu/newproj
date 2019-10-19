const express = require('express');
const app = express();
const axios = require("axios")
const port = process.env.PORT || 80;
const host = '0.0.0.0';

app.listen(port, host, () => console.log(`listening on port ${port}`));
app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'pug')

app.get("/", async function(req, res){
    const resObj = await axios.get("https://api.github.com/users/Emichu/repos");
    res.render('index', { collection: resObj.data })
});