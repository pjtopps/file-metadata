const express = require('express');
const app = express();
const formidable = require('express-formidable');

const all = require('./controllers/all');
const uploads = require('./controllers/uploads');

let port = 3000;
console.log(`listening on port:${port}`);

app.use(formidable());

const staticFilePath = __dirname + '/views/index.html';

uploads(app);
all(app, staticFilePath);

app.listen(port);
