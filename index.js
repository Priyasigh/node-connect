const express = require('express')
const donorrouter = require('./routes/blooddonor')
const app=express()
require ("./db/connection")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/blooddonor',donorrouter)

//Server
const port=process.env.PORT|3000
app.listen(port,()=>{
  console.log('Server running at ',port)
})

