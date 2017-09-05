\c dummy_data;

DROP TABLE events;
DROP TABLE users;

CREATE TABLE IF NOT EXISTS events
(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR(255),
  image VARCHAR,
  url VARCHAR
);

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);
