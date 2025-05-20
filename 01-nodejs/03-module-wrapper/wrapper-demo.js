
// (
//     function (exports, require, module, __filename, __dirname) {
//         //your code file goes here
//     }
// )


const wrapperExplorer = require('./wrapper-explorer');

console.log("__filename from wrapper demo: ", __filename);
console.log("__dirname from wrapper demo: ", __dirname);

wrapperExplorer.greeting();

console.log(module, "module"); // every js file is a individual module in javascript and module.children will have all imports of current file or this module
console.log(exports, "exports")
console.log(require, "require")