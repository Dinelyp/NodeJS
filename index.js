const express=require("express")

const app=express();
const port=3000;
const suma= 4+8;

app.get("/",(req,res)=>{
    res.send(`La suma de 4+8 es:${suma}`);
})
app.get("/user",(req,res)=>{
    res.send("Hello User");
})
app.listen(port,()=>{
    console.log("el servidor esta escuchando en http://localhost:${port}")
    console.log(`La suma es: ${suma}`)
})
