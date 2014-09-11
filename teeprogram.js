//$ node teeprogram.js fileNameHere
//any lines you enter will be displayed in the console and added to fileNameHere
//exit program with ctrl + c

'use strict';

var fs = require('fs');

process.stdin.pipe(process.stdout);
process.stdin.pipe(fs.createWriteStream(process.argv[2]));
