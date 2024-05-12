const express = require('express');
const path = require('path')

const app = express();
const weatherData = require("./weatherData");
const { error } = require('console');
const port = process.env.PORT || 3000; 

app.get('/', (req,res)=>{
  res.send('This is my new weather App')
})

app.get('/weather', (req, res)=>{
  if(!req.query.address){
    return res.send('Address is required')
  }
  weatherData(req.query.address, (error,result)=> {
    if(error){
      return res.send(error)
    }
    res.send(result)
  })
})

app.get("*", (req,res)=>{
  res.send("This route doesn't working")
})

app.listen(port, ()=>{
  console.log('Server is listening on port ' + port)
})