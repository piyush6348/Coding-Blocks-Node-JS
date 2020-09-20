// Output of this is decided on runtime.
// It depends upon the context in which it is executing.
// 1.) If it's getting executed in an object then it will have `this` pointing to that object.
// 2.) If it's getting executed globally then it will have `this` pointing to window.

console.log("\n\n\n------------------This---------------\n\n");

function globalThis() {
    console.log(this);
}

globalThis()

let someObj = {
    a: 10,
    b: "text",
    c: function() {
        console.log(this);
    }
}

// Method is getting executed in reference of object `someObj`
someObj.c()

// Method is getting executed in global reference
let globalMethodC = someObj.c
globalMethodC() 