const express=require('express')
const cors= require('cors')
const app= express()

app.use(cors())
app.get('/',(req,res)=>{
    res.json([
        {
            "id":"1",
            "name":"Dinesh Babu"
        },
        {
            "id":"2",
            "name":"Sasikumar"
        },
        {
            "id":"3",
            "name":"Gopinath"
        },
        {
            "id":"4",
            "name":"Sudharsan"
        },
        {
            "id":"5",
            "name":"Dhamu"
        },
    ])
})
app.get('/users',(req,res)=>{
    res.json([
        {
            "id":"1",
            "name":"Dinesh Babu"
        },
        {
            "id":"2",
            "name":"Dinesh Babu2"
        },
])
}
)
app.listen(4000,()=>{
    console.log("Hello the node application is running successfully");
})