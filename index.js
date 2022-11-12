require("dotenv").config()

const express=require("express")
const connect=require("./config")
const cors=require("cors")
const bodyParser = require("body-parser");
const app=express()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true,parameterLimit: 50000}));


const ProdRoutes=require("./ProdFeature/prod.route")

const PORT=process.env.PORT

app.use(cors())
app.use(express.json())

app.use("/product",ProdRoutes)

app.use("/",async(req,res)=>{

    res.send("helllo")

})
app.listen(PORT,async()=>{

    await connect()

    console.log(`localhost:${PORT}...listening`)
})