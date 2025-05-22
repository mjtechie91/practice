

function getDataOne() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    })
}


getDataOne()
    .then(val => val * 2) // 2
    .then(val2 => val2 * 3) // 6
    .then(val3 => console.log(val3, "val3")); // 6 val3