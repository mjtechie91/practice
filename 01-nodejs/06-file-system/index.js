const fs = require('fs');
const path = require('path');
const dataFolder = path.join(__dirname, 'data');
// /Users/mjm925/may12/practice/01-nodejs/06-file-system/data
console.log(dataFolder)
console.log(fs.existsSync(dataFolder))
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("folder created")
}

const filePath = path.join(dataFolder, 'example-file.txt');

fs.writeFileSync(filePath, "Hi, this text is added from Node js \n this is next line");

const fileContents = fs.readFileSync(filePath, 'utf-8');
console.log("File Contents: " + fileContents)

fs.appendFileSync(filePath, "\nanother line appended to file from nodejs");
const fileContentsUpdated = fs.readFileSync(filePath, 'utf-8');
console.log("Updated File Contents: " + fileContentsUpdated)


// Async way of creating, writing and reading the file
const asyncFilePath = path.join(dataFolder, 'async-file.txt');
fs.writeFile(asyncFilePath, "Hi, this content added from nodejs using writeFile(Async)", (err) => {
    if (err) {
        console.log("File writing error", err);
        throw err;
    }
    console.log('async file created successfully and content added to it', asyncFilePath)
    fs.readFile(asyncFilePath, {}, (err, data) => {
        if (err) {
            console.log('readFile error', err);
            throw err;
        }
        console.log("Async file contents: " + data);
    })

    fs.appendFile(asyncFilePath, "\n this line is added from nodejs using appendFile method asynchronously", (err) => {
        if (err) throw err;
        console.log('async file content appended');
    })

    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log("Updated async file content: " + data);
    })
})