const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "studioa",
});

app.post("/create", (req, res) => {
  const vr_number = req.body.vr_number;
  const vr_name = req.body.vr_name;
  const vr_size = req.body.vr_size;
  const vr_ltd = req.body.vr_ltd;
  const vr_date = req.body.vr_date;
  const vr_type = req.body.vr_type;
  const vr_description = req.body.vr_description;
  const vr_tracks = req.body.vr_tracks;
  const vr_price = req.body.vr_price;
  const vr_quantity = req.body.vr_quantity;
  const vr_img = req.body.vr_img;

  db.query(
    "INSERT INTO vr_album (vr_number, vr_name, vr_size, vr_ltd, vr_date, vr_type, vr_description, vr_tracks, vr_price, vr_quantity, vr_img) VALUES('?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?')",
    [
      vr_number,
      vr_name,
      vr_size,
      vr_ltd,
      vr_date,
      vr_type,
      vr_description,
      vr_tracks,
      vr_price,
      vr_quantity,
      vr_img,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/vr_album", (req, res) => {
  db.query("SELECT *FROM vr_album", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
    res.json(result);
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
