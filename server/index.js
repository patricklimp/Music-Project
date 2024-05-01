const playslistRouter = require('./routes/playlist-route')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());



app.use('/playlists', playslistRouter)

app.listen(port,()=>{
    console.log('o aplicativo iniciou em http://localhost:3000/')
})