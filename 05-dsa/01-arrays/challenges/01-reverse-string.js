
const text = "hello";
const textToArray = text.split('');
const length = textToArray.length;
const reversedTextArray = [];
for(let item of textToArray){
    reversedTextArray.unshift(item);
}
console.log(reversedTextArray.join(''));


//another approach
const reversedTextArray2 = [];
for(let char of text){
    reversedTextArray2.unshift(char);
}
console.log(reversedTextArray2.join(''));

//approach 3

const reverseString = text => text.split('').reverse().join('');

console.log(reverseString("Mahendra"));
console.log(reverseString("Anusha"));
