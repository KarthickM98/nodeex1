const express = require('express') /// importing using express using require

const app = express() // express server creating
const port =8000;
// creating a end-points  = route is urls end-point

app.get('/user',function(req,res){
    const user = { usernmae :" name"}
    res.send(JSON.stringify(user))
}) 


app.listen(port,function(){
    console.log("app started in locahlhost");
})
// Create a backend project directory, 
//create an express server and host it
// on port 8000 and send the response
// Check the API using Postman