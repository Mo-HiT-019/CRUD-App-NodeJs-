const express = require('express');
const {createUser,getUsers,getOneUser,updateUser,deleteUser} =require('../controllers/controller');
const { validateUser } = require('../middleware/validator');


const router=express.Router()


router.post('/',validateUser,createUser);
router.get('/',getUsers);
router.get('/:id',getOneUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser)

module.exports=router;