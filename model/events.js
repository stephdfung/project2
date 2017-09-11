const db = require('../db/config');

const Event = {};

Event.findAll = () => {
  return db.query('SELECT * FROM events');
};

// Event.findById = (id) => {
//   return db.oneOrNone(`
//     SELECT * FROM events
//     WHERE id = $1
//   `, [id]);
// };

Event.create = (event) => {
  return db.one(`
    INSERT INTO events
    (name, location, image, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [event.name, event.location, event.image, event.url]);
}

// Event.update = (event, id) => {
//   return db.one(`
//     UPDATE events SET
//     name = $1,
//     location = $2,
//     url = $3,
//     WHERE id = $4
//     RETURNING *
//   `, [event.name, event.location, event.url, id]);
// }

// Event.destroy = (id) => {
//   return db.none(`
//     DELETE FROM events
//     WHERE id = $1
//   `, [id]);
// };

module.exports = Event;
