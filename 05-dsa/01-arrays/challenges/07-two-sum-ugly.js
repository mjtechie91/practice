
const twoSum = (array, target) => {
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] == target){
                return [i, j]
            }
        }
    }
    return [];
}

console.log(twoSum([1, 3, 7, 15, 13, 4], 11)); // [ 2, 5 ] => 7 + 4 = 11
console.log(twoSum([1, 3, 7, 15, 13, 4], 16)); // [ 0, 3 ] => 1 + 15 = 16