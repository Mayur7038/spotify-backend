const express = require("express");

const User = require("../models/user.model");

const router = express.Router();


router.post("/login" , async (req,res)=>{

    try{  
        const user = await User.findOne({email : req.body.email}).lean().exec(); 

        if(user){

            return res.send(user.username);
        }
        else{
            return res.send("Please Enter The Valid Details")
        }
    }
    catch(e){
        return res.send({message : e.message});
    }
})




router.post("" , async (req,res)=>{

    try{

        // we will try to find the user with email provided;

        let user = await User.findOne({email : req.body.email}).lean().exec();

        if(user){
            return res.send("false");
        }
        else{
            
            user = await User.create(req.body);
    
            return res.status(201).send(user);
        }
    

    }
    catch(e){
        
        return res.status(500).send({message : e.message});
    }

} )

router.get("" , async(req,res)=>{

    try{

        const user = await User.find().lean().exec();

        return res.status(201).send(user);


    }
    catch(e){
        return res.status(500).send({message : e.message});
    }

})


module.exports = router;