const express=require('express')
const cors= require('cors')
const app= express()
app.use(cors())
app.get('/',(req,res)=>{
    res.json([
        {
            "id":"1",
            "name":"Happy Soni"
        },
        {
            "id":"2",
            "name":"Gopal"
        },
        {
            "id":"3",
            "name":"Ayush"
        },
        {
            "id":"4",
            "name":"Aman"
        },
        {
            "id":"5",
            "name":"Utkarsh"
        },
    ])
})
app.listen(4000,()=>{
    console.log("listning from port 4000");
})