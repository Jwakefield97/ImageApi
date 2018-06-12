const express = require("express"),
      route = express.Router(),
      fileUpload = require("express-fileupload"); 

route.use(fileUpload());
route.get("/",(req,res)=>{
    res.render("multiUpload.pug"); 
}); 

route.post("/upload",(req,res)=>{
    if (!req.files){
        return res.status(400).send('No files were uploaded.');
    }
    let count = 0; //stupid way of making unique file names 
    //loop through each file uploaded
    req.files.sampleFile.forEach(file =>{
        // Use the mv() method to place the file somewhere on your server
        file.mv(`./resources/uploads/filename${count}.jpg`, err => {
           if (err){
               return res.status(500).send(err);
           }
       });
       count++;
    });
    res.send('Files uploaded!');
}); 

module.exports = route; 