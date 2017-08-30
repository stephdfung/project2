require('isomorphic-fetch');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

function getFromSeatGeek(req, res, next) {
  fetch(`https://api.seatgeek.com/2/events?q={$req.params.query}&client_id=${API_KEY}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonRes => {
      console.log(jsonRes.main);
      res.locals.eventData = jsonRes.main;
      next();
    }).catch(err => {
      console.log(err);
      next();
    })
}

module.exports = {
  getFromSeatGeek,
}
