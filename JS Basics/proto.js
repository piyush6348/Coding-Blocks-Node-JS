console.log("\n\n\n------------------Proto---------------\n\n");

let obj1 = {
    a: 10,
    b: 20,
    c: "abcd"
}

/*
    This is known as object to object inheritance aka Prototype based Inheritance.
    `obj2` will not contain the properties of `obj1` directly.

    When we try to read a property on obj2->
    1.) It will first look in `obj2`. If not found
    2.) It will look in obj2.__proto__ which is nothing but obj1(as obj2 was created from obj1).
    If not found in obj2.__proto__
    3.) It will look in obj2.__proto__.__proto__ and so on ....

    When we try to write a property on obj2->
    1.) Write will always happen on actually object ie obj2 and not on proto
    2.) obj2.a = 100 will create `a` in obj2 with value 100. `a` in obj1 will continue 
    to exist with value 10. (Something like COW operation)
*/
let obj2 = Object.create(obj1)
obj2.p = "mnp"
obj2.q = "dhd"
obj2.r = "juy"

console.log(obj1);
console.log(obj2);

console.log(obj2.__proto__ == obj1);

let obj3 = Object.create(obj2)
console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.__proto__ == obj2);
console.log(obj3.__proto__.__proto__ == obj1);

// This is the default proto of javascript added to all objects.
console.log(obj3.__proto__.__proto__.__proto__ == obj1.__proto__);
