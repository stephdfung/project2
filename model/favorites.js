const db = require('../db/config');

const Favorite = {};

Favorite.create = data => {
  return db.one(`
    INSERT INTO favorites
    (user_id, event_id)
    VALUES ($1, $2)
    RETURNING *
  `, [data.user, data.event_id]);
};

Favorite.destroy = favorite => {
  return db.oneOrNone(`
    DELETE * FROM favorites
    WHERE id = $1
  `, [favorite]);
};

module.exports = Favorite;
