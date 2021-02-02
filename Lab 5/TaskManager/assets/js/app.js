// Define UI Variables

const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const reloadIcon = document.querySelector('.fa');
const sorting = document.querySelector('#sort');
let asc = true;

// Adding Event Listeners

form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);
sorting.addEventListener('change', sortTasks);

// Function Definitions

function addNewTask(e) {
    if (taskInput.value === "") {
        taskInput.style.borderColor = "red";
        return;
    }
    const li = document.createElement('li');
    li.className = "collection-item";
    const txt = document.createTextNode(taskInput.value);
    li.appendChild(txt);

    const link = document.createElement('a');
    link.innerHTML = "<i class= 'fa fa-remove'></i>";
    link.className = "delete-item secondary-content";
    li.appendChild(link);

    var d = document.createElement('a');
    d.className = "mydate";
    d.textContent = new Date();
    d.style = "display:none";

    li.appendChild(d);

    if (!asc) taskList.insertBefore(li, taskList.children[0])
    else taskList.appendChild(li);
    taskInput.value = "";

    e.preventDefault();
}

function clearAllTasks(e) {
    // taskList.innerHTML = "";
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    const userInput = filter.value.toUpperCase();
    const collection = document.querySelectorAll(".collection-item");
    for (let i = 0; i < collection.length; i++) {
        var txtValue = collection[i].firstChild.textContent;
        if (txtValue.toUpperCase().indexOf(userInput) > -1) {
            collection[i].style.display = "block";
        }
        else {
            collection[i].style.display = "none";
        }
    }
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure about that? ")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function reloadPage() {
    location.reload();
}

function sortTasks(e) {
    let i = taskList.childNodes.length;
    while (i--) {
        taskList.appendChild(taskList.childNodes[i]);
    }
    asc = !asc;
}