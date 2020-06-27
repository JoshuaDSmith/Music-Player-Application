async function Okay(req, res) {
  res = await query(
    `INSERT INTO systemusers (username, email_address, password, occupation) VALUES ( Joshua, Calebdouglas.j@gmail.com, password, HR)`
  );
  console.log(res);
}
Okay();
