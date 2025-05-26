const getArrayChunks = (inputArray, chunkSize) => {
    const chunkedArray = [];
    let partArray = [];
    for(let i = 0; i < inputArray.length; i++){
       if(partArray.length < chunkSize){
            partArray.push(inputArray[i]);
            if(i == inputArray.length - 1 && partArray.length >= chunkSize){
                chunkedArray.push(partArray);
            }
       } else {
            chunkedArray.push(partArray);
            partArray = [inputArray[i]];
       }

    }
    return chunkedArray;

}

console.log(getArrayChunks([1,2,3,4,5,6, 7, 8], 2))