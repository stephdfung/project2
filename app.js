const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.use(logger('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const eventsRouter = require('./routes/events-routes');
app.use('/events', eventsRouter);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not found!',
  });
});
