const express = require('express')

const app = express()

// # Create an HTTP Server

// It should have 4 routes
// 1. http://localhost:3000/multiply?a=1&b=2
// 2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)


app.get('/add', function(req,res){
    req.query.a = parseInt(req.query.a)
    req.query.b = parseInt(req.query.b)
    res.json('The sum of a and b is ' + (req.query.a + req.query.b))
})
app.get('/subtract', function(req,res){
  req.query.a , req.query.b
    res.send('The difference of a and b is ' + (req.query.a - req.query.b))  
})
app.get('/multiply', function(req,res){
    req.query.a = parseInt(req.query.a)
    req.query.b = parseInt(req.query.b)
    res.send('The product of a and b is ' + (req.query.a * req.query.b))
    
})
app.get('/divide', function(req,res){
    try {
        req.query.a = parseInt(req.query.a)
        req.query.b = parseInt(req.query.b)
        res.send('The division of a and b is ' + (req.query.a / req.query.b))   
    } catch (error) {
        res.status(400).send('Invalid input')
    }
})

app.listen(3000)