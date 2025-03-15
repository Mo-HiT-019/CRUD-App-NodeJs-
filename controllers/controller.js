const User =require("../models/User.js");

const createUser = async( req,res)=>{
    try{
        const {name,email,age}=req.body;
        const user = new User({name,email,age})
        await user.save();
        res.status(201).json(user)
    }catch(err){
        res.status(400).json({err:'Error creating user'});
    }
}

const getUsers = async(req,res)=>{
    try{
        const user= await User.find()
        res.json(user);
    }catch(error){
        res.status(500).json({error:"Error fetching userss.."})
    }
}


const getOneUser=async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({error:"user not Found"})
        }
        res.json(user);
    }catch(err){
        res.status(500).json({ error: "Error fetching user" });

    }
}

const updateUser = async(req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if (!user){
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user); 
    }catch(error){
        res.status(400).json({error:'Update failed..'})
    }
}


const deleteUser = async(req,res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id)
        if (!user){
            return res.status(404).json({ error: "User not found" });
        } 
        res.json({ message: "User deleted successfully" });
    }catch(error){
        res.status(500).json({error:'Delete failed..'})
    }
}

module.exports={
    createUser,
    getUsers,
    getOneUser,
    updateUser,
    deleteUser
}