

const isPalindrome = text => text.toString().split('').reverse().join('') === text.toString();


console.log(isPalindrome("abba"));
console.log(isPalindrome("fullstack"));
console.log(isPalindrome(121));


const reverseInt = num => {
    const temp = num;
    const reversed = Math.abs(num).toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num) === num
}

console.log(reverseInt(-121)); //true

console.log(reverseInt(4444)); // true
console.log(reverseInt(449844)); //false