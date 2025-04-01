const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
data=[
    {
        id:1,
        name:'name1',
        age:20
    },
    {
        id:2,
        name:'name2',
        age:30
    },
    {
        id:3,
        name:'name3',
        age:40
    }
];
app.get("/data",(req,res)=>{
    res.json(data)
});
app.get("/data/id/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const userdata=data.find(data=>data.id===id)
    if (userdata){
        res.json(userdata)
    }
});
app.get("/data/name/:name",(req,res)=>{
    const name=req.params.name
    const userdata=data.find(data=>data.name.toLowerCase()===name.toLowerCase())
    if (userdata){
        res.json(userdata)
    }
});
app.post("/data",(req,res)=>{
    const {name,age}=req.body
    const id= data.length+1
    const userdata={
        id,
        name,
        age
    };
    data.push(userdata)
    res.json(userdata)
});
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
app.get("/hello",(req,res)=>{
    res.send("hello world");
});
app.get("/name",(req,res)=>{
    res.send("hello my is kathyayani")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
