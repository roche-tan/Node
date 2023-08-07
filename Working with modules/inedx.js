// module directly installed when download Node. It allowa us to have information about the OS
const os = require('os');

// it allows us to work with the the os' files. Important for when we create servers and programs
const fs = require('fs');
const { SlowBuffer } = require('buffer');

// allow us to use http in our server
const http = require('http');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), ' bytes');
console.log('total mem: ', os.totalmem(), ' bytes');

//File system (fs) how to create a new file. Has 3 params: name, content and callback. Name. where to create it - in this case ./ as it will be in the same folder. Callback is a function called when the process is finished to know if everythig was made ok
fs.writeFile('./text.txt', 'line one', function(err){
  if(err){
    console.log(err);
  }
  console.log('File created');
});

/*const users = query('SELECT * FROM Users'); 
 Async code
query('Select * FROM users', function(err, users){
  if(err){
    console.log(err);
  }
  if(users){
    console.log(users);
  }
})*/

//read file
fs.readFile('./text.txt', function(err, data){
  if(err){
    console.log(err);
  }
  //console.log(data); shows buffer
  console.log(data.toString()); //shows in string
});

// iniciatize server
http.createServer(function(req, res){
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write('<h1>Hola mundo</h1>');
  res.end(); //need to end res always
}).listen(3000); //in which server we want listen to it
// once executed, only gets the 1st code executed. If modified, it will not appear. We have to stop server and call it again


