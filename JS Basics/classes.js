/* 
    Ways to create objects in JS.
    1.) Function declarations
    2.) Function expressions
    3.) Class declarations
    4.) Class expressions.
*/

// 1.) Function declaration

function Fruit(name, taste) {
    this.name = name;
    this.taste = taste;
}

let mango = new Fruit("Mango", "Sweet")
console.log(mango.name);
console.log(mango.taste);

// 2.) Function expressions
// These FE are not hoisted. The variable itself is hoisted 
// but it's definition is not. 
var FruitFunctionExpression = function(name, taste) {
    this.name = name;
    this.taste = taste;
}

let kiwi = new FruitFunctionExpression("Kiwi", "Sweet & Sour");
console.log(kiwi.name);
console.log(kiwi.taste);

// 3.) Class declarations

class FruitClass {
    constructor(name, taste) {
        this.name = name;
        this.taste = taste;
    }
}

let pineapple = new FruitClass("Pineapple", "Sweet & Sour")
console.log(pineapple.name);
console.log(pineapple.taste);

// 4.) Class Expressions

var FruitClassExpressions = class {
    constructor(name, taste) {
        this.name = name;
        this.taste = taste;
    }
}

let guava = new FruitClassExpressions("Guava", "Bitter");
console.log(guava.name);
console.log(guava.taste);