import express from "express";

const app = express();


app.get("/", (request, response)=>{
    return response.json([
        {id:2, name:"ana"},
    ])
})

app.listen(3001, () =>{
    console.log("servidor rodando");
})