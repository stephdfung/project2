const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// index route NON RENDER
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// const imageRoutes = require('./routes/image-routes');
// app.use('/images', imageRoutes);

// error handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found, invalid endpoint',
  });
});
