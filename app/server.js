"use strict"; 
const express = require("express"), 
    app = express(), 
    bodyParser = require("body-parser"), 
    http = require("http").Server(app),
    homeRoutes = require("./routes/homeRoutes.js"),
	expressSession = require("express-session"); //used for logins and sessions;   

app.use(express.static("resources"));

app.set("view engine","pug");//sets view engine  
app.set("views", "./views");  //tells view engine where to look for templates 


app.use(expressSession({ 
    secret: 'this-is-a-secret-token', 
    cookie: { maxAge: 6000000 },
    resave: true,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

app.use("/", homeRoutes); 

http.listen(3000,()=>{
    console.log("Listening on port 3000");
}); 