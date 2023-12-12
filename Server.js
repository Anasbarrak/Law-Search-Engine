const express= require('express')
const port= 4444;
const app= express();
app.get("/", (req, res)=>{
    res.send('Hello Anas')
})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})