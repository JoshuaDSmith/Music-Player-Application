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
    client.query(`INSERT into pageusers values ($1,$2,$3,$4, $5)`, [
      2,
      "Joshua",
      "calebdouglas.j@gmail.com",
      "HR",
      "Possword12",
    ])
  )

  //see below
  .then((results) => console.table(results))

  .catch((e) => console.log(e));
