const express =require("express");

const MoneySaving = require("../models/moneySaving.model");

const upload = require("../middlewares/upload");

const router=express.Router();


router.post("/", upload.single("productImages"), async(req,res)=>{
try{
    const moneySaving = await MoneySaving.create({

        img:req.file.path,
        companyname:req.body.companyname,
        name:req.body.name,
        newprice:req.body.newprice,
        oldprice:req.body.oldprice,
        off:req.body.off
    });

    return res.status(201).json({moneySaving})

} catch(e){

    return res.status(500).json({ status :"failed", message : e.message})
}

})

router.post("/multiple", upload.any("productImages"), async(req,res)=>{
    const filePaths = req.files.map((file) => file.path)
    try{
        const moneySaving = await MoneySaving.create({
         
            img:filePaths,
            companyname:req.body.companyname,
             name:req.body.name,
             newprice:req.body.newprice,
              oldprice:req.body.oldprice,
             off:req.body.off
        });
    
        return res.status(201).json({moneySaving})
    
    } catch(e){
    
        return res.status(500).json({ status :"failed", message : e.message})
    }
        
    })

    router.get("", async (req, res) => {
        try {
          const moneySaving = await MoneySaving.find().lean().exec();
      
          return res.send(moneySaving);
        } catch (e) {
          return res.status(500).json({ message: e.message, status: "Failed" });
        }
      });




module.exports=router;