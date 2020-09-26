console.log("\n\n\n------------------Classes Advance---------------\n\n");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Functions don't use function keyword inside class in JS.
    isAdult() {
        return this.age >= 18
    }
}

const john = new Person("John Doe", 24);
const piyush = new Person("Piyush Gupta", 23);

console.log("typeof Person is " + typeof(Person));
console.log("typeof John is " + typeof(john));
console.log(john.__proto__ == Function.prototype); // false
console.log(john.__proto__ == Object.prototype); // false
console.log(john.__proto__ == Person.prototype); // true
console.log(john.__proto__.__proto__ == Object.prototype); // true

/*
    Whenever we define a class a new prototype gets created ie
    Classname.prototype
    All objects of that class inherit from Classname.prototype &
    Classname.prototype inherits from Object.prototype 
*/

console.log(john.isAdult == piyush.isAdult); // True
// This means that the method `isAdult` doesn't reside inside objects john, piyush
// but are present in their parent classes(In this case it's Person.prototype) which contains these
// common methods.

/*
    How to find which parent class has the common method?
    1.) print obj.method
    2.) print obj.__proto__.method
    3.) print obj.__proto__.__proto__.method and so on ....

    If at any point output is null
    Then method is in proto just before that level. eg
    print obj.__proto__.__proto__.method is null
    then method is in print obj.__proto__
*/


class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
}

const stud1 = new Student("Student 1", 17, 5)
const stud2 = new Student("Student 2", 19, 4)

console.log(stud1.__proto__ == Student.prototype); // True
console.log(stud1.__proto__.__proto__ == Person.prototype); // True
console.log(stud1.__proto__.__proto__.__proto__ == Object.prototype); // True

// Inheritance chain
// Object.prototype -> Person.prototype -> Student.prototype

// There's no inheritance between the actual classes. These are not even clases
// these are functions. (typeof Person) gives Function
// This inheritance is called as Prototype based inheritance.
// JS doesn't have class based inheritance.