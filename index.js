var express = require('express')

var app = express()

const SERVER_PORT = 8089

//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})


//http://localhost:8089/user/ryan/you
//Path Parameter
app.post("/user/:firstname/:lastname", (req, res) =>{
    const { firstname, lastname } = req.params
    const user = {
      firstname,
      lastname
    }
    res.json(user);
})

//http://localhost:8089/user?firstname=ryan&lastname=you
//Query Parameter
app.get("/user", (req, res) =>{
    res.json(req.query)
})

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})