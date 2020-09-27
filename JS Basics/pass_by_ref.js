console.log("\n\n\n------------------Pass by value and pass by reference---------------\n\n");

var winner = "Harry Potter"

function changeWinner(winner) {
    winner = "Draco Malfoy"
}

console.log("Winner before changing is " + winner);

changeWinner(winner)

console.log("Winner after changing is " + winner);

// ------------------------------------------------Example 2

var fruits = ["Apple", "Mango"]

function changeFruits(fruits) {
    fruits = ["Kiwi", "Papaya"]
}

console.log("Fruits before changing is " + fruits); // Fruits before changing is Apple,Mango

changeFruits(fruits)

console.log("Fruits after changing is " + fruits); // Fruits after changing is Apple,Mango

// ------------------------------------------------Example 3

var veggies = ["Tomato", "Potato"]

function changeVegetables(veggies) {
    veggies[0] = "Ladyfinger"
    veggies[1] = "Beetroot"
}

console.log("Veggies before changing is " + veggies); // Veggies before changing is Tomato,Potato

changeVegetables(veggies)

console.log("Veggies after changing is " + veggies); // Veggies after changing is Ladyfinger,Beetroot

/*
    Explanation of this behaviour?
    -> In JS primitive data types include Number, String, Boolean. Apart from these anything like
    Object, Arrays are non primitive data types. 
    -> When non primitive data types are passed in function their reference is passed rather than value.
    -> Hence if we change any data with reference it's visible outside.
    -> But if we change the value of that reference it won't matter because in JS `pass by value` exists.
    -> There's nothing like `pass by reference` in JS.
    -> For primitive data types the value is passed itself hence it's not visible outside upon change.
    -> For non primitive the reference itself is passed by value.
*/