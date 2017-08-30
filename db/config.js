const options = {
  query: (e) => {
    console.log(e.query);
  }
}

const pgp = require('pg-pronise')(options);

function setDatabase() {
    if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
      return pgp({
        database: 'dummy_data',
        port: 4001,
        host: 'localhost',
      });
    } else if(process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABASE_URL);
    }
}

const db = setDatabase();

module.exports = db;
