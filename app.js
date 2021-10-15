const express = require('express')
const app = express()
const port = 8080;
 

//static content 
app.use( express.static('public') ) 


app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })
app.listen(port)