console.log("Dom Elements traversal");

let duo = document.getElementsByTagName('ul')[0].getElementsByTagName('li')[1].getElementsByTagName('ol')[0].getElementsByTagName('li')[0]

// uno.
console.log(duo.innerText);

// refers to ol element in which uno is present.
console.log(duo.parentElement);

// refers to li in which entire ol is present.
console.log(duo.parentElement.parentElement);

// aay.
console.log(duo.parentElement.parentElement.previousElementSibling.innerText);

/*
    bee
    uno
    duo
    tres
    quad
*/
console.log(duo.parentElement.parentElement.previousElementSibling.nextElementSibling.innerText);

// uno.
console.log(duo.parentElement.parentElement.previousElementSibling.nextElementSibling.children[0].children[0].innerText);