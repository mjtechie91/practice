const fs = require('fs');


fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    console.log("File Contents from input.txt ", data);

    fs.writeFile('output.txt', data.toUpperCase(), err => {
        if (err) throw err;
        console.log("data written to the new file");

        fs.readFile('output.txt', (err, data) => {
            if (err) throw err;
            console.log("Updated file content from output.txt: " + data);
        })
    })

   

})