const express =require("express");

const NewArrival = require("../models/newArrival.model");

const upload = require("../middlewares/uplaod");

const router=express.Router();


router.post("/", upload.single("productImages"), async(req,res)=>{
try{
    const newArrival = await NewArrival.create({

        img:req.file.path,
        companyname:req.body.companyname,
        name:req.body.name,
        newprice:req.body.newprice,
        oldprice:req.body.oldprice,
        off:req.body.off
    });

    return res.status(201).json({newArrival})

} catch(e){

    return res.status(500).json({ status :"failed", message : e.message})
}

})

router.post("/multiple", upload.any("productImages"), async(req,res)=>{
    const filePaths = req.files.map((file) => file.path)
    try{
        const newArrival = await NewArrival.create({
         
            img:filePaths,
            companyname:req.body.companyname,
             name:req.body.name,
             newprice:req.body.newprice,
              oldprice:req.body.oldprice,
             off:req.body.off
        });
    
        return res.status(201).json({newArrival})
    
    } catch(e){
    
        return res.status(500).json({ status :"failed", message : e.message})
    }
    
    
    
        
    })




module.exports=router;