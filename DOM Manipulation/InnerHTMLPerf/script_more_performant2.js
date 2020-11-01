
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

script_more_performant2.js
    Total time taken for 10 elements is 0 ms.
    Total time taken for 100 elements is 1 ms.
    Total time taken for 1000 elements is 10 ms.
    Total time taken for 10000 elements is 34 ms.
    Total time taken for 100000 elements is 267 ms.
*/
btn.onclick = function() {
    let startTime = new Date().getTime();
    const num = parseInt(inpBox.value);
    for (let i = 1; i <= num; i++) {
        /*
            Sometimes we cannot extract out HTML modification like we did in
            script_more_performant script. In that case we should not use 
            `innerHTML` attribute and use inbuilt methods like
            `appendChild` which avoids steps like
                1.) Understanding the string we assign to innerHTML.
                2.) And recreating the DOM.
        */
       let item = document.createElement('li');
       item.innerText = i;
       list.appendChild(item)
    }
    let endTime = new Date().getTime();
    let totalTime = endTime - startTime;
    console.log("Total time taken for " + num + " elements is " + totalTime);
}