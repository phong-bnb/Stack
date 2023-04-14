export class Stack<T> {
    container: T[] = [];
    constructor() {
    }
    push(data: T ){
        this.container.push(data)
    }
    pop(){
      return this.container.pop()
    }
    size(){
      return this.container.length

    }
}
let stack = new Stack()
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(8)
stack.push(5)
stack.pop()
console.log(stack)
console.log(stack.size())