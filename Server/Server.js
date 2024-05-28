// const express = require('express');
// const app =  express()
// const cors = require("cors")
// const port = 3000;

// app.use(express())
// app.use(cors())
// app.get('/', (req, res) => res.send("hello"))


// app.get('/api/user', async (req, res) => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         res.json(data); 
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

const express=require("express");
const cors=require("cors")
const app=express();
app.use(cors());
const port=process.env.PORT || 3000;


const apiData=require("./Data.json")

app.get("/",(req,res)=>{
    res.json("i am live")
});

app.get("/data",(req,res)=>{
    res.json(apiData)
});

app.listen(port, ()=> console.log( "data comming"))