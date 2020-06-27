let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);

app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(express.json());
app.options("*", cors());
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);

const MusicFiles = new mongoose.Schema({
  title: String,
  size: Number,
  type: String,
});

let name = "SongDB";
const Songs = new mongoose.model(name, MusicFiles);

app.post("/SongDB", (req, res) => {
  // if (req !== "" || null || undefined) {
  console.log(req.body);
  let file = req.body;

  const newUser = new Songs({
    title: file.title,
    size: file.size,
    type: file.type,
  });
  console.log("okayie", newUser);

  newUser.save(function(err) {
    if (err) {
      console.log("no luck");
    } else {
      console.log("Successful insertion");
      res.send("successful in the backend");
    }
  });
});

app.get("/SoundTrack", (req, res) => {
  Songs.find(function(err, displayTracks) {
    if (err) {
      console.log(err);
    } else res.json(displayTracks);
  });
});

app.listen(3005, function() {
  console.log("Server started on port 3005");
});
