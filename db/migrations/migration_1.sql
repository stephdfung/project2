\c dummy_data;

CREATE TABLE IF NOT EXISTS events
(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR(255),
  url VARCHAR
);

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR,
  email VARCHAR,
  password VARCHAR
);
