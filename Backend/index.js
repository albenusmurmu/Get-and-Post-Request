const express = require("express");
const app = express();

const port = 8080;

// This handle the error from req.body -> why -> because req.bodey must know that which types of data should entering
app.use(express.urlencoded({extended:true})); // middleware
app.use(express.json()); // recieve data from server side in json format like -> hopscotch, postman, Thunder client.

// It show user password and id into url(query)
app.get("/register",(req,res) =>{
    let {user,password} = req.query;
    res.send(`standard get response. Welcome ${user}!`);
    
});

// It show into the body 
app.post("/register",(req,res) =>{
    let {user,password} = req.body;
    res.send(`standard post response. welcome ${user}`);
    
});

app.listen(port,() =>{
    console.log(`listening on ${port}`);
}); 
