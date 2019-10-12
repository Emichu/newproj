const express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = express();
const port = process.env.PORT || 80;
const host = '0.0.0.0';
const request = new XMLHttpRequest();

app.listen(port, host, () => console.log(`listening on port ${port}`));
app.set('views', './views')
app.set('view engine', 'pug')


var repos = [
    {
        name: "API-list",
        link: "http://www.google.com"
    },
    {
        name: "newproj",
        link: "http://www.google.com"
    }
];

app.get('/', function (req, res) {
    res.render('index', {collection: repos})
  })

// request.open('GET', 'https://api.github.com/users/Emichu/repos', true);

// request.onload = function() {
//     if(request.status !== 200){
//         console.log('error');
//         return;
//     }

//     var data = JSON.parse(this.response);

//     data.forEach(function(repo){
//         var content = res.reder('index', {title: 'GitHub Repos', message: 'GitHub Repos', list: repo.name})
//     });
// }

// request.send()