const express = require('express');
const app = express();

app.post('/register',(req,res)=>{
    console.log("Route /register.")
    res.send("Success!")
})

app.listen(3000,()=>{
    console.log("Listening on port 3000.");
})