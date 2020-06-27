let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();
const md5 = require("md5");

let session = require("express-session");
let passport = require("passport");
let passportlocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);

app.use(cors());
app.use(express.json());
app.options("*", cors());
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);

const Bulletin = new mongoose.Schema({
  title: String,
  content: String,
});

let name = "Bulletin";
const bulletins = new mongoose.model(name, Bulletin);

app.delete("/delete", (req, res) => {
  let x = req.body;
  console.log(x.title);
  bulletins.deleteOne({ title: x.title }, function(err) {
    if (err) console.log(err);
    console.log("Successful deletion");
    res.send("successful in the backend");
  });
});

app.post("/bulletinboard", (req, res) => {
  console.log(req.body);
  let Result = req.body;
  try {
    for (i = 0; i < Result.length; i++) {
      const newUser = new bulletins({
        title: Result[i].title,
        content: Result[i].content,
      });

      newUser.save(function(err) {
        if (err) {
          console.log("no luck");
        } else {
          console.log(newUser);
        }
      });
    }

    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

app.get("/Notes", function(req, res) {
  bulletins.find(function(err, bulletins) {
    if (err) {
      console.log(err);
    } else res.json(bulletins);
  });
});

app.listen(3003, function() {
  console.log("Server started on port 3003");
});
