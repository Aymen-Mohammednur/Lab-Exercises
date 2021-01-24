// Define UI Variables

const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const reloadIcon = document.querySelector('.fa');

// Adding Event Listeners

form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);

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
    taskList.appendChild(li);

    e.preventDefault();
}

function clearAllTasks(e) {
    // taskList.innerHTML = "";
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    console.log("Task Filter..");
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