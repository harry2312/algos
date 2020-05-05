class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this.data;
  }

  pop() {
    this.data.pop();
    return this.data;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const arrayStack = new Stack();
arrayStack.push("google");
arrayStack.push("facebook");
arrayStack.push("discord");
console.log(arrayStack);
