import express from 'express';
const app = express();
import routes from './routes/router.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose from "mongoose"


const  port = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
   }



const connection = async() => {
const URL = 'mongodb+srv://altafbazaz7:devaltaf@cluster0.h5qdtmi.mongodb.net/?retryWrites=true&w=majority'
   
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log('Database connected successfully');
    }catch(err){
         console.log('Error while connecting to Mongo', err)
    }
}

connection()

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/', routes)


app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})