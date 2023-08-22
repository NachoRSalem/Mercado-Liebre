const express = require("express");

const app = express();

const path = require("path");

const publicPath = path.join(__dirname, "../public");

//const fs = require ("fs");
//console.log(fs);

app.use(express.static(publicPath));


const PORT= process.env.PORT || 3001;
app.listen(PORT, ()=>
console.log(`servidor corriendo ${PORT}`)
);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
  });
  
  app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
  });

