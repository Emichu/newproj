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

app.get("/repos/:id", async function(req, res) {
    /*
        get all the repos
        filter array to find repo with id that matches the param
        pass repo obj into view
    */
    const resObj = await axios.get("https://api.github.com/users/Emichu/repos")
    const repos = resObj.data

    const repo = repos.filter(function(repo){
        return repo.id === Number(req.params.id)
    });

    if(repo.length === 0) {
        res.render('errorpg')}
    else {
        res.render('dummypage', {repo: repo[0]})
    }
});