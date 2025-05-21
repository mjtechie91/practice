function performArithmeticOperation(a, b, callback) {
    setTimeout(() => {
        callback(a, b);
    }, 1000)
}


performArithmeticOperation(2, 3, ( a, b ) => {
    let sum = a + b;
    console.log(`Addtion of two numbers ${a}+${b} is ${sum}`);
    performArithmeticOperation(sum, 2, (a, b) => {
        let diff = a - b;
        console.log(`Subtraction of two numbers ${a}-${b} is ${diff}`)
        performArithmeticOperation(diff, 4, (a, b) => {
            let product = a * b;
            console.log(`Product of two numbers ${a}*${b} is ${product}`)
            performArithmeticOperation(product, 2, (a, b) => {
                let division = a / b;
                console.log(`Division of two numbers ${a}/${b} is ${division}`);
                performArithmeticOperation(division, 7, (a, b) => {
                    let modulus = a % b;
                    console.log(`Modules of two numbers ${a}%${b} is ${modulus}`);
                })
            })
        })
    })
})