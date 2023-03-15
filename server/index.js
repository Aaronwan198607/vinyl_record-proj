const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());



app.use(express.urlencoded({extended: false}));
app.use(express.json());
const corsOptions = {
  credentials: true,
  origin: function(origin, cb){
    console.log({origin});
    cb(null, true);
  }
};
app.use(cors(corsOptions))
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database: "studioa",
});

// 使用者傳輸資料
// 宣告vr_number變數抓取req.body內的vr_number
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

  // 將抓取到的直送入表內

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

app.listen(3001, () => {
  console.log("ok, server is running on port 3001");
});
