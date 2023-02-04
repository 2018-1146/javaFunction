class Stack {
    constructor() {
        this.items = [];
    }

    add(element){
        return this.items.push(element);
    }
  remove() {
    if (this.items.length > 0){
      return this.items.pop();
    }
  }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
stack.add(9);
console.log(stack.items);

stack.remove();
console.log(stack.items);