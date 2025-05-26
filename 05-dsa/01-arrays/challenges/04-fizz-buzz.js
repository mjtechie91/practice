
const fizzzBuzz = (n) => {

    for(let i = 1; i <= n; i++){

        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz: "+ i);
        }

        if(i % 3 === 0){
            console.log("Fizz: "+ i);
        }

        if(i % 5 === 0){
            console.log("Buzz: "+ i);
        }
    }
}

console.log(fizzzBuzz(100))