// Example 1
function outer(arg1) {
    let var1 = 10

    function inner(arg2) {
        let var2 = 20
        console.log(arg1, var1, arg2, var2); // param 1 10 param 2 20
    }

    return inner;
}

let x = outer("param 1")
console.log(typeof (x)); // function
x("param 2");


// Example 2
function outer2(arg1) {
    let var1 = 10

    function inner2(arg2) {
        let var2 = 20

        function innerMost(arg3) {
            let var3 = 30
            console.log(arg1, var1, arg2, var2, arg3, var3); // param 1 10 param 2 20 param 3 30
        }
        return innerMost;
    }
    return inner2;
}

let x2 = outer2("param 1")
console.log(typeof (x2)); // function
let y = x2("param 2");
console.log(typeof (y)); // function
let z = y("param 3");
