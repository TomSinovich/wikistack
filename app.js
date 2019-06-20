const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout.js');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
  res.send(layout('a'));
});

const port = 1337;
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
