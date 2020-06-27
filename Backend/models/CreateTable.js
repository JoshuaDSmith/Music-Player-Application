// const { query } = require("./index");

// async function Okay() {
//   const res = await query(
//     `CREATE TABLE IF NOT EXISTS systemusers (user_id SERIAL PRIMARY KEY, username TEXT, email_address TEXT, password TEXT, occupation TEXT)`
//   );
//   console.log(res);
// }
// Okay();
const { Client } = require("./node_modules/pg");
const client = new Client({
  user: "postgres",
  password: "Possword12",
  host: "localhost",
  port: 5432,
  database: "trial",
});

client
  .connect()
  //this will return a promise so:
  .then(() => console.log("connected"))
  .then(() =>
    client.query(
      `CREATE TABLE IF NOT EXISTS pageusers (user_id SERIAL PRIMARY KEY, name TEXT, email TEXT, occupation TEXT, password TEXT)`
    )
  ) //see below
  .then((results) => console.table(results))

  .catch((e) => console.log(e));
