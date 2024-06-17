const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
// khaai báo đường dẫn 
app.use(express.static(path.join(__dirname,'public')));


// HTTP logger
app.use(morgan('combined'));

// Template engine Handlebars configuration
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/new', (req, res) => {
  res.render('new');
});
// Start the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});