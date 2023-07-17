// const { log } = require("console")
const mongoose= require("mongoose")
const express = require("express");
const app = express();


const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
const port= process.env.PORT|| 5000; 
require('./db/connection');

app.use(express.json());


app.use(require("./router/buyauth"));
app.use(require("./router/auth"));
app.use(require("./router/sellauth"));
app.use(require("./router/signupauth"));
app.use(require("./router/trial"));
app.use(require("./router/admin"));
// app.use(require("./router/trial"))
// app.use(require("../"))
// app.use(require("./router/"))



if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, ()=>{
    console.log(`listening to  port no ${port}`)
})