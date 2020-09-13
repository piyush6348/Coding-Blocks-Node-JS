

method1();

// Since method2 was not hoisted hence uncommenting this line will give error.
// method2();

function method1() {
    console.log("This function is hoisted");
}

let method2 = function() {
    console.log("This function is not hoisted");
}