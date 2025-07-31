const express = require("express");
const app = express();

let port = 3000;

app.set("view engine", "ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.use(express.static("public"));
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

app.get("/rollDice",(req,res)=>{
    let data = Math.floor(Math.random()*7)+1;
    res.render("math.ejs", {num : data});
})

app.get("/ig/:username",(req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    res.render("ig.ejs",{data});
})