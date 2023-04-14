"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (data) {
        this.container.push(data);
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(8);
stack.push(5);
stack.pop();
console.log(stack);
console.log(stack.size());
