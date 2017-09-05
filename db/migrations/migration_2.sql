\c dummy_data;

DROP TABLE favorites;

CREATE TABLE IF NOT EXISTS favorites
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  event_id INTEGER
);
