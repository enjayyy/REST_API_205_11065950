const express = require ('express')
const mongoose = require ('mongoose')
const app = express ()

app.get ('/', (req, res)=> {
    res.send('Hello NODE API')
})

app.post ('/patients', (req, res)=> {
    console.log(req.body)
})

app.post ('/patients', (req, res)=> {
    console.log(req.body)
})

app.post ('/visitation', (req, res)=> {
    console.log(req.body)
})

export  const server = express()

server.use("/patients",
patientRouter)

app.listen(3000, ()=> {
    console.log('Node API app is running on port 3000')
})

mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://akpaabe:12345@cluster0.dznu4eq.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() =>{
    console.log('connected to mongodb')
    app.listen (3000, ()=> {
    console.log('Node API app is running on port 3000')
    })

}).catch((error)=> {
    console.log(error)
})