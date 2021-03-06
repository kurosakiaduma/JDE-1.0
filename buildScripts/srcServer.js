//reference to path of the index file and open instance of express which will allow us to open our webpage on a browser
let express = require('express');
let path = require('path');
let open = require('open');

let port = 3000;

//instance of express set to varaible app
let app = express();

//telling express which routes it should handle i.e. from '/' root
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));//using path to join directory name as well as the path to the source directory where our index file is
});
//telling express to listen to the port 3000
app.listen(port, function(err){
  if (err){
    console.log(err);
  }else {
    //open the application at pointed address x port
    open('http://localhost:' + port);//hard-coded in the address of the website
  }
});
