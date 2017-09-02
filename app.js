//dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

//auth requirements
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
// const authHelpers = require('./services/auth/auth-helpers');

//initalize it, time you recognize it
const app = express();

//secret hidden file stuff
require('dotenv').config();

//LOGIN AUTH
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(authHelpers.loginRequired)

//other routes
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.render('index', { title: 'Cool things to do when you travel'});
});

const eventRoutes = require('./routes/event-routes');
app.use('/events', eventRoutes);

const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);

const userRoutes = require('./routes/user-routes');
app.use('/users', userRoutes);

// error handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found, invalid endpoint',
  });
});
