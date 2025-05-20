const path = require('path');

console.log('__dirname: ', __dirname);
console.log("current directory name: ", path.dirname(__filename))
console.log("current file name: ", path.basename(__filename))
console.log("file extension", path.extname(__filename));
const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Joined path", joinPath);

const joinPath2 = path.join("user", "documents", "node", "projects");
console.log("Joined path 2", joinPath2);

const resolvePath = path.resolve("user", "documents", "node", "project");
console.log("Resolve path:", resolvePath);

const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("normalizePath", normalizePath);

// __dirname:  /Users/mjm925/may12/practice/01-nodejs/05-path-module
// current directory name:  /Users/mjm925/may12/practice/01-nodejs/05-path-module
// current file name:  index.js
// file extension .js
// Joined path /user/documents/node/projects
// Joined path 2 user/documents/node/projects
// Resolve path: /Users/mjm925/may12/practice/01-nodejs/05-path-module/user/documents/node/project
// normalizePath /user/node/projects