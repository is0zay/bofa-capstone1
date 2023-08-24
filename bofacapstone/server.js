const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "capstone",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.get("/newsarticles", (req, res) => {
  const query = "SELECT * FROM newsarticles";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching articles:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.json(results);
    }
  });
});

app.listen(6000, () => {
  console.log(`Express server listening on port: 6000`);
});
