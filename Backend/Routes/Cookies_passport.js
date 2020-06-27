let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();
const md5 = require("md5");

let session = require("express-session");
let passport = require("passport");
let passportlocalMongoose = require("passport-local-mongoose");

let dbo = "userDB";
mongoose.connect(`mongodb://localhost:27017/${dbo}`, { useNewUrlParser: true });
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

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "MuffinTop.",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const userSchema = new mongoose.Schema({
  username: String,
  job: String,
  email: String,
  password: String,
});

userSchema.plugin(passportlocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/Register", function(req, res) {
  console.log(req.body);
  User.register({ username: req.body.username }, req.body.password, function(
    err,
    user
  ) {
    if (err) {
      console.log(err);
      console.log("error");
    } else {
      passport.authenticate("local")(req, res, function() {
        console.log("successful pending next step");
        if (req.isAuthenticated()) {
          res.json({ status: "success" });
          console.log("it's been done right");
        } else {
          res.redirect("/Login");
          console.log("you cannot skip authentication");
        }
      });
    }
  });
});

app.get("/Secrets", function(req, res) {
  if (req.isAuthenticated()) {
    res.json({ status: "success" });
    console.log("authentication has been successful");
  } else {
    res.redirect("/Login");
    console.log("you cannot skip authentication");
  }
});
app.post("/Login", function(req, res) {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  console.log(password);

  User.findOne({ email: email }, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          passport.authenticate("local");
          res.json({ status: "success" });
          console.log("cookie attached");
        }
      }
    }
  });
});

app.listen(3002, function() {
  console.log("Server started on port 3002");
});

app.get("/Logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// app.post("/Notes", function(req, res) {

//  for(i=0; i < req.body.length; i++) {
//    let title = req.body[i].title
//    let content = req.body[i].content

//  let post = {title: title,
// content: content}

// console.log(post)
//  }
// })
