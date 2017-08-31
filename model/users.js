const db = require('../db/config');

const User = {};

//probably don't need to findALL
User.findAll = () => {
  return db.query('SELECT * FROM users');
};

User.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE id = $1
  `, [id]);
};

User.create = (users) => {
  return db.one(`
    INSERT INTO users
    (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [users.username, users.email, users.password]);
}

User.update = (users, id) => {
  return db.one(`
    UPDATE users SET
    username = $1,
    email = $2,
    password = $3,
    WHERE id = $4
    RETURNING *
  `, [users.username, users.email, users.password, id]);
}

User.destroy = (id) => {
  return db.none(`
    DELETE FROM users
    WHERE id = $1
  `, [id]);
};

module.exports = User;
