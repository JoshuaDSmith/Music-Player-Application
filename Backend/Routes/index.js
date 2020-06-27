

let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let app = express();
const md5 = require('md5');
mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });



app.use(cors());
app.use(express.json())
app.options("*", cors());
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);

const userSchema = {
  username: String,
  job: String,
  email: String,
  password: String, 
};


const User = new mongoose.model("User", userSchema);



app.post("/Register", (req, res) => {


const newUser = new User({
  username:req.body.username, 
  email:req.body.email, 
  job:req.body.job, 
  password:md5(req.body.password)
})
console.log(newUser)

newUser.save(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("success")
  }
});
});


app.post("/Login", function(req, res) {
  console.log(req.body)
  const email = req.body.email;
  const password = md5(req.body.password)
  console.log(password)


  User.findOne({ email: email }, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else { 
      if (foundUser) {
        if (foundUser.password === password) {
          console.log("You did it you son of a mitch")
       res.json({status:"success"})
        }
      }
    }
  });
});

app.listen(3002, function() {
  console.log("Server started on port 3002");
});
