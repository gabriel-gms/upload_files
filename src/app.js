import express from "express"
import "dotenv/config"
import router from "./routes/routes.js"
import mongoose from "mongoose"

const app = express()

app.use(express.json())

app.get('/ping', (req, res)=>{
    res.json({msg:"pong"})
})

app.use('/', router)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xs6rrmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    app.listen(process.env.PORT)
    console.log("Funcionando")
}).catch((error)=>{
    console.log("Não conectou "+ error)
})