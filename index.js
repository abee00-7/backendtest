
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const usersRouter = require('./routes/users');

require('./db/db')

const mTServer = express()

mTServer.use(cors())
mTServer.use(express.json())
mTServer.use(usersRouter)

const PORT = 3000 || process.env.PORT

mTServer.listen(PORT,()=>{
    console.log(`MT Server started at port ${PORT}`);
})

mTServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style='color:blue;'> Server started and waiting for client request!!</h1>`)
})



