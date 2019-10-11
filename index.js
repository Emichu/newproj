const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World'));

app.set('port', port);
app.listen(() => console.log(`listening on port ${port}`));