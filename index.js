const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const tong = require('./data/tong.json')

app.use(cors())

app.get('/',(req,res)=>{
        res.send('tong is running at least')
})


app.get('/tong',(req,res)=>{
    res.send(tong)
})


app.listen(port,(req,res)=>{
    console.log(`tong is running is the port${port}`)
})