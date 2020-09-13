// Global scope, Function scope and Block scope.
// var: Function scope.
// let: Block scope.


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
