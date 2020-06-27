// const { Pool } = require("pg");

// //SETUP CONNECTION BETWEEN API AND DB

// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD
// });

// //EXPORT QUERY FUNCTION FOR WRITING PSQL AROUND API

// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback);
//   }
// };
