const express = require('express');
const app = express();
const mockUserData = [
  {name: 'Mark'},
  {name: 'Jill'}
]

ap.get('/users', function(req,res){
  res.json({
    success: true,
    message: 'succesfully got users. Nice!',
    users: mockUserData
  })
})

app.listen(8000,function(){
  console.log("server is listening")
})

