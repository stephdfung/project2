require('isomorphic-fetch');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

function getFromSeatGeek(req, res, next) {
  let place = req.body.query
  fetch('https://api.seatgeek.com/2/events?q='+ place +'&client_id=ODY5MzY3MHwxNTAzOTQ5MjEzLjMx&client_secret=bc290568d41cd12fe211e47f0e392da904655b74072ea7f2a7742fd34dd8b31a')
    .then(data => data.json())
    .then(data => {
      // console.log('------>>>>>',data['events'][0]['performers'][0]['divisions'][0]['display_name']);
      // console.log('------>>>>>',data.events[0]);
      res.locals.eventData = data;

      let url = data['events'][0]['performers'][0]['url']
            console.log('this is what im looking for--->', url)
      // console.log('=======>',res.locals.eventData);
      next();
    }).catch(err => {
      console.log(err);
      next();
    })
}

module.exports = {
  getFromSeatGeek,
}
