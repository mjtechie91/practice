class MyArray{
    constructor(){
        this.nothing = true;
        this.length = 0;
        this.data = [];
    }

    push(element){
        this.data = [...this.data, element]
        this.length++
    }
}

// const myNewArray = new MyArray();
// console.log(myNewArray);
// myNewArray.push("25");
// myNewArray.push(49);
// myNewArray.push('Apple')
// console.log(myNewArray);

class MyArrayAnother{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(element){
        this.data[this.length]= element;
        this.length++
    }

    get(index){
        return this.data[index];
    }

    pop(){
        delete this.data[--this.length];
        return this.data;
    }

    shift(){
        const firstItem = this.data[0];
        for(let i = 0; i < this.length; i++ ){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1];
        this.length --;
        console.log(this.data, "this.data");
    }

    deleteByIndex(index){
        if(index <= this.length - 1){
             delete this.data[index];
            for(let i = index; i < this.length; i++){
                this.data[i] = this.data[i+1];
            }
            delete this.data[this.length - 1];
            this.length--
        }
       
        return this.data;
    }
}



//MyArrayAnother
const myNewArrayAnother = new MyArrayAnother();
console.log(myNewArrayAnother);
myNewArrayAnother.push("Orange");
myNewArrayAnother.push("Kiwi");
myNewArrayAnother.push('Apple');
myNewArrayAnother.push('Banana');
myNewArrayAnother.push('Mango');
myNewArrayAnother.push('Guava');
myNewArrayAnother.push('Pineapple');
console.log(myNewArrayAnother);

console.log(myNewArrayAnother.get(3)); //Banana
console.log(myNewArrayAnother.get(30)); //undefined

console.log(myNewArrayAnother.pop());
console.log(myNewArrayAnother);

console.log("----Array shift----")
console.log("Before: ", myNewArrayAnother);
console.log(myNewArrayAnother.shift());
console.log("After: ", myNewArrayAnother);

console.log("-----deleteByIndex(index)----")
console.log("Before: ", myNewArrayAnother);
console.log(myNewArrayAnother.deleteByIndex(5)); //Nothing will be deleted, as we have 5 elements with indexes from 0 to 4
console.log("After: ", myNewArrayAnother);

console.log("Before2: ", myNewArrayAnother);
console.log(myNewArrayAnother.deleteByIndex(3)); 
console.log("After2: ", myNewArrayAnother);
