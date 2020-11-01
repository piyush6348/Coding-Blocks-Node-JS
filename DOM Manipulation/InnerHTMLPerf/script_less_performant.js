
let inpBox = document.getElementById('inpbox');
let btn = document.getElementById('btn');
let list = document.getElementById('list');

/*
    Total time taken for 10 elements is 1 ms.
    Total time taken for 100 elements is 25 ms.
    Total time taken for 1000 elements is 2011 ms.
    Total time taken for 1000 elements is 5348 ms.
    Total time taken for 10000 elements is 250434 ms.
*/
btn.onclick = function() {
    let startTime = new Date().getTime();
    const num = parseInt(inpBox.value);
    for (let i = 1; i <= num; i++) {
        /*
            let str = '<li>' + i + '</li>';
            list.innerHTML = nil;
            list.innerHTML = str;
            
            This above expression is equivalent to below line.
            Every time we change innerHTML, we can see that behind the scenes
            it is first cleared and then entire element is rewritten on DOM.
        */
        list.innerHTML += '<li>' + i + '</li>';
    }
    let endTime = new Date().getTime();
    let totalTime = endTime - startTime;
    console.log("Total time taken for " + num + " elements is " + totalTime);
}