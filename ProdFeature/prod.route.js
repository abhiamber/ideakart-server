const express=require("express")

const app=express.Router()

const Product=require("./prod.model")

app.get("/", async(req,res)=>{

    const prod=await Product.find()

    res.send(prod)

})


app.post("/", async (req,res)=>{
    console.log(req.body)
    try{
        const prod=await Product.create({...req.body})
        res.send(prod)
    }
    catch(e){
        // const prod=await Product.create({...req.body})
        res.status(404).send(e.message)
    }
   

})

module.exports=app