const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('Yuji'),('Jessica')`;
  connection.query(sql);

  connection.query(`SELECT * from people`, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(`<p><h1>Full Cycle Rocks!</h1></p> <p>- ${results[0].name}</p><p>- ${results[1].name}.</p>`);
  });

  connection.end();
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});