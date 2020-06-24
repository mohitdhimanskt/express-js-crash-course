const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();
//Init middleware 
// app.use(logger);

//Handlebars Middleware 
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('veiw engine', 'handlbars');

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);