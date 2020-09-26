let bool = true                             // 3 levels __proto__ is null
let num = 10                                // 3 levels __proto__ is null
let str = "abc"                             // 3 levels __proto__ is null
let arr = [1,2,3]                           // 3 levels __proto__ is null                
let obj = { key: "value"}                   // 2 levels __proto__ is null
let func = function() {                     // 3 levels __proto__ is null
    console.log("This is a function"); 
}


console.log("\n\n\n------------------Proto2---------------\n\n");

console.log("typeof Boolean " + typeof Boolean)
console.log("typeof Number " + typeof Number)
console.log("typeof String " + typeof String)
console.log("typeof Array " + typeof Array)
console.log("typeof Object " + typeof Object)
console.log("typeof Function " + typeof Function)

console.log("\n\n\n------------------Proto2 proto chain---------------\n\n");

console.log(bool.__proto__.__proto__ == obj.__proto__);
console.log(num.__proto__.__proto__ == obj.__proto__);
console.log(str.__proto__.__proto__ == obj.__proto__);
console.log(arr.__proto__.__proto__ == obj.__proto__);
console.log(func.__proto__.__proto__ == obj.__proto__);

/*
    This means that every data type in JS inherits from same 
    type that an Object inherits from.
    ie in JS everything is an Object.
*/

console.log("\n\n\n------------------Proto2 prototypes---------------\n\n");
console.log(bool.__proto__ == Boolean.prototype);
console.log(num.__proto__ == Number.prototype);
console.log(str.__proto__ == String.prototype);
console.log(arr.__proto__ == Array.prototype);
console.log(obj.__proto__ == Object.prototype);
console.log(func.__proto__ == Function.prototype);
// This means all prototypes like String.prototype inherits from Object.prototype


let something = Object.create(Boolean.prototype);
console.log(something.__proto__ == bool.__proto__); // YES
console.log(typeof(something)); // Object
console.log(typeof(bool)); // boolean
/* 
    This means although the proto of two objects might be same ie
    they might be inheriting from same class but they might not be of same type.
*/

/*
    All these prototypes can be considered as classes which contain all common methods eg
    String.prototype contains all methods for strings ie charAt, indexOf, substring, slice.

    We can also override these methods eg
*/
String.prototype.originalCharAt = String.prototype.charAt
String.prototype.charAt = function() {
    console.log("charAt method called at " + this)
    return this.originalCharAt(...arguments)
}