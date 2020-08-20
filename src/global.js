

const path = require("path");

let nodeFirst = "Hello World ! Hello All";

console.log(nodeFirst);

// In Command line
// ls
// cd src
// run node global.js => gives Hello World ! Hello All

/*
 * console is global object and global object is available globally (Values , Objects, Methods)
 */

global.console.log(nodeFirst);

// run node global.js => gives Hello World ! Hello All

console.log(__dirname);

// run node global.js => gives ../../Desktop/NodeJs/src
// Gives the Path of the directory

console.log(__filename);

// run node global.js => gives ../../Desktop/NodeJs/src/global.js
// Gives the Path of the file


console.log(`The file name is ${path.basename(__filename)}`);


// run node global.js => gives The file name is global.js