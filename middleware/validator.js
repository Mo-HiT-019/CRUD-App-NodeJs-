const { body, validationResult } = require("express-validator");

exports.validateUser = [
    body("name").notEmpty().withMessage("Name should be given"),
    body("email").notEmpty().withMessage("mail should be given"),
    body("age").isInt({min:1}).withMessage("Age should be positive"),
    (req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        next()
    }
    
]