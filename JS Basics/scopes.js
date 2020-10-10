console.log("\n\n\n------------------Scopes---------------\n\n");

// Global scope, Function scope and Block scope.
// var: Function scope.
// let: Block scope.
// const: Block scope.


function someMethod() {
    console.log("someMethod called");
    {
        let a = 10;
    }
    {
        var b = 20;
    }
    // variable a is block scope and won't be visible outside the block 
    // in which it is defined. Uncommenting this statement will create error.
    // console.log(a);

    // variable b is block scope and will be visible outside the block
    // in which it is defined.
    console.log(b);
    {
        // variable c is global variable and will be visible by all the scopes in this script
        // once declared.
        c = 40;
    }
    console.log(c);
}


const x = 7;
// x = 0; error

const arr = [1, 2, 3]
arr.push(10) // Works
// arr = [1] Not allowed

/*
    -> If a variable is const then it's value cannot be changed(For primitive types eg Boolean, String, Number).
    -> But if a non primitive data is allocated to a const variable eg arrays, objects etc then their 
    reference cannot be changed but the object itself can be changed.

    In above eg modifying the data of reference worked( arr.push)
    But modifying the reference failed(arr = ..)
*/

console.log("\n\n\n------------------Scopes More examples---------------\n\n");

var myVar = 11;

function myVarFunc() {
    var myVar = 21;
    if (true) {
        var myVar = 31;
        console.log(myVar); // 31
    }
    console.log(myVar); // 31
}
myVarFunc()
console.log(myVar); // 11


let myLet = 11;

function myLetFunc() {
    let myLet = 21;
    if (true) {
        let myLet = 31;
        console.log(myLet); // 31
    }
    console.log(myLet); // 21
}
myLetFunc()
console.log(myLet); // 11

let myConst = 11;

function myConstFunc() {
    let myConst = 21;
    if (true) {
        let myConst = 31;
        console.log(myConst); // 31
    }
    console.log(myConst); // 21
}
myConstFunc()
console.log(myConst); // 11