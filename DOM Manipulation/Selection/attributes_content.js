console.log("Dom attributes & Content");

let paras = document.getElementsByClassName('para')

let secondPara = paras[1];

// "This is a another para."
console.log(secondPara.innerText);

/*
    "
        This is a another para.
    "
*/
console.log(secondPara.innerHTML);
/*
    <p class="para" id="p2">
        This is a another para.
    </p>
*/
console.log(secondPara.outerHTML);

secondPara.innerText = "This is another para with changed text";

// This is another para with changed text.
console.log(secondPara.innerText);

secondPara.innerHTML = "Hey <b> some bold text</b> what's up."

// Hey <b> some bold text</b> what's up.
console.log(secondPara.innerHTML);

// This will help in fetching attribute of HTML element at runtime and changing it as well.
let idAttr = secondPara.getAttribute('id');
let classAttr = secondPara.getAttribute('class');
secondPara.setAttribute('contenteditable', true);