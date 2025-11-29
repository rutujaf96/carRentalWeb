var express = require("express");
var bodyparser = require("body-parser");
var upload = require("express-fileupload");
var session = require("express-session");
var userRoute = require("./routes/user");
var adminRoute = require("./routes/admin");
var app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(upload());

app.use(session({
    secret:"A2Z IT HUB",
    resave:true,
    saveUninitialized: true,
    cookie: { secure: false } // Change to true if using HTTPS
}));
app.use(express.static(__dirname + '/public/'));

app.use("/",userRoute); 
app.use("/admin",adminRoute);

app.listen(1000);