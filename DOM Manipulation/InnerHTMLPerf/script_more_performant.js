
let inpBox = document.getElementById('inpbox');
let btn = document.getElementById('btn');
let list = document.getElementById('list');

/*
script_less_performant.js
    Total time taken for 10 elements is 1 ms.
    Total time taken for 100 elements is 25 ms.
    Total time taken for 1000 elements is 2011 ms.
    Total time taken for 1000 elements is 5348 ms.
    Total time taken for 10000 elements is 250434 ms.

script_more_performant.js
    Total time taken for 10 elements is 0 ms.
    Total time taken for 100 elements is 1 ms.
    Total time taken for 1000 elements is 8 ms.
    Total time taken for 10000 elements is 41 ms.
    Total time taken for 100000 elements is 383 ms.
*/
btn.onclick = function() {
    let startTime = new Date().getTime();
    const num = parseInt(inpBox.value);
    let listHTML = '';
    for (let i = 1; i <= num; i++) {
        /*
            let newStr = oldStr + '<li>' + i + '</li>';
            This above expression is equivalent to below line.
            Every time we change a string, we can see that behind the scenes
            a new string value is created everytime we change a string value.
        */
        listHTML += '<li>' + i + '</li>';
    }
    // In this more performant script we change the DOM only once.
    list.innerHTML = listHTML;
    let endTime = new Date().getTime();
    let totalTime = endTime - startTime;
    console.log("Total time taken for " + num + " elements is " + totalTime);
}