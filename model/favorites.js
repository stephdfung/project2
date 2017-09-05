const db = require('../db/config');

const Favorite = {};

Favorite.create = data => {
  return db.one(`
    INSERT INTO favorites
    (user_id, event_id)
    VALUES ($1, $2)
    RETURNING *
  `, [data.user_id, data.event_id]);
};

Favorite.display = id => {
  return db.query(`
    SELECT events.name, events.location, events.image, events.url
    FROM events
    JOIN favorites
    ON favorites.event_id = events.id
    WHERE favorites.user_id = $1`,
    [ id ]);
};

Favorite.destroy = favorite => {
  return db.oneOrNone(`
    DELETE * FROM favorites
    WHERE id = $1
  `, [favorite]);
};

module.exports = Favorite;
