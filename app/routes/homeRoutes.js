const express = require("express"),
      route = express.Router(); 

route.get("/",(req,res)=>{
    res.render("home.pug"); 
}); 


module.exports = route; 