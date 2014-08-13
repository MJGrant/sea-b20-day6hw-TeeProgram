//To use: 
//$ node teeprogram.js "your string here"
//"your string here" will be returned to the console and output to outputfile.txt
'use strict';

var fs = require('fs');
var input = process.argv[2];

var stream = fs.createWriteStream("output.txt");
stream.once('open', function(write) {
  stream.write(input);
  stream.end();
});

console.log("Your input \"" + input + "\" has been written to output.txt.");