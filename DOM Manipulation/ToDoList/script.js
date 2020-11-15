window.onload = function() {
    console.log("Piyush onload");
    let newTask = document.getElementById('newTask');
    let addTask = document.getElementById('addTask');
    let toDoList = document.getElementById('toDoList');

    addTask.onclick = function() {
        console.log("Piyush onclick");
        let toDoItem = document.createElement('li')

        let taskSpan = document.createElement('span');
        taskSpan.innerText = newTask.value;

        let xBtn = getDeleteButton();

        let upBtn = getShiftUpButton();

        let downBtn = getShiftDownButton();

        toDoItem.appendChild(xBtn);
        toDoItem.appendChild(taskSpan);
        toDoItem.appendChild(upBtn);
        toDoItem.appendChild(downBtn);

        toDoList.appendChild(toDoItem);
    }
}

function getDeleteButton() {
    let xBtn = document.createElement('button');
    xBtn.innerText = "Delete this";
    xBtn.onclick = function (event) {
        let li = event.target.parentElement;
        li.remove();
    };
    return xBtn;
}

function getShiftDownButton() {
    let toDoList = document.getElementById('toDoList');
    let downBtn = document.createElement('button');
    downBtn.innerText = "Down";
    downBtn.onclick = function (event) {
        let li = event.target.parentElement;
        let liNext = li.nextElementSibling;
        li.remove();
        if (liNext) {
            if(liNext.nextElementSibling) {
                toDoList.insertBefore(li, liNext.nextElementSibling);
            } else {
                toDoList.appendChild(li);
            }
        } else {
            toDoList.insertBefore(li,toDoList.children[0]);
        }
    };
    return downBtn;
}

function getShiftUpButton() {
    let toDoList = document.getElementById('toDoList');
    let upBtn = document.createElement('button');
    upBtn.innerText = "Up";
    upBtn.onclick = function (event) {
        let li = event.target.parentElement;
        let liPrevious = li.previousElementSibling;
        li.remove();
        if (liPrevious) {
            toDoList.insertBefore(li, liPrevious);
        } else {
            toDoList.appendChild(li);
        }
    };
    return upBtn;
}
