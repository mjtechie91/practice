const fs = require('fs');

function person(name, callbackFunction) {
    console.log(`Hello ${name}`);
    callbackFunction();
}

function address() {
    console.log("Address from callback function")
}

person("Mahi", address);


fs.readFile("invalidFile.txt", {}, (err, data) => {
    if (err) {
        console.log("File reading error: ", err)
       // throw err;
    }

})

fs.readFile('input.txt', {'encoding': 'utf8'}, (err, data) => {
    if (err) {
        console.log("File read error for input"); //we have created this file, so it wont give error
    }

    console.log("File Contents from a valid file: ", data);
})


const readHandler = (err, data) => {
    if (err) {
        console.log("File read error for input"); //we have created this file, so it wont give error
    }

    console.log("File Contents from a valid file: ", data);
};

fs.readFile('input.txt', {'encoding': 'utf8'}, readHandler)
