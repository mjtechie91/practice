
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    
    constructor(){
    }

    push(value) {
        const myNewNode =  new Node(value);
        if(!this.head){
            this.head = myNewNode;
        } else {
            this.tail.next = myNewNode;
        }
        
        this.tail = myNewNode
        return this;
    }

    pop(){
        if(this.head){
            let temp = this.head;
            let prevNode = this.head;
        // for(; temp.next != null; ){ //if you want to use for loop
            while(temp.next){
                prevNode = temp;
                temp = prevNode.next;
            
            }
            if(prevNode.next == null){
                this.head = null;
                this.tail = null;
            } else {
                this.tail = prevNode;
                this.tail.next=null;
            }
        } 
    }
        
    unshift(){
        // 

    
    }
}

const linkedList = new LinkedList();
linkedList.push(5);
linkedList.push(10);
linkedList.push(15);
linkedList.pop();
linkedList.pop();
console.dir(linkedList)