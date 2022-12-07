const express = require('express')
const connectDatabase = require('./Dbconnect')

const app = express()
app.use(express.json());

const routes = require('./routes')

connectDatabase();


app.use('/api',routes)

app.get('/',(req,res)=>{
   res.send('api started')
})



app.listen(5000,()=>{
    console.log('server start')
} )