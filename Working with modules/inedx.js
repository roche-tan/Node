// module directly installed when download Node. It allowa us to have information about the OS
const os = require('os');

// it allows us to work with the the os' files. Important for when we create servers and programs
const fs = require('fs');
const { SlowBuffer } = require('buffer');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), ' bytes');
console.log('total mem: ', os.totalmem(), ' bytes');

// how to create a new file. Has 3 params: name, content and callback. Name. where to create it - in this case ./ as it will be in the same folder. Callback is a function called when the process is finished to know if everythig was made ok
fs.writeFile('./text.txt', 'line one', function(err){
  if(err){
    console.log(err);
  }
  console.log('File created');
});