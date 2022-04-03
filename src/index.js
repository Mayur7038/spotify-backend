const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");

app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use("/user" , userController);

app.use("/" , async(req,res)=>{

    res.send({name : "mayur"})

} )


app.listen(port ,async function (){

    try{
        await connect();
        console.log("listening to port 5000");
    }
    catch(e){
        console.log(e.message);
    }
} )