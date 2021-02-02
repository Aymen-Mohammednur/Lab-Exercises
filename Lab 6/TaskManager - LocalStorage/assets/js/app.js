// Define UI Variables 

const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form'); 
const filter = document.querySelector('#filter'); 
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks'); 
const reloadIcon = document.querySelector('.fa'); 
const sorting = document.querySelector('#sort');
let asc = true;

// Add Event Listener  [Form , clearBtn and filter search input ]

form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);
sorting.addEventListener('change', sortTasks);
document.addEventListener('DOMContentLoaded', loadTasksfromDB);

// Function Definitions

function addNewTask(e) {

    e.preventDefault(); //disable form submission

    if (taskInput.value === '') {
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

    if (!asc) taskList.insertBefore(li, taskList.children[0])
    else taskList.appendChild(li);

    addToDatabase(taskInput.value);
    taskInput.value = "";
}

function clearAllTasks() {
    // taskList.innerHTML = '';
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearAllTasksfromDB();
}

function filterTasks(e) {
    const userInput = filter.value.toUpperCase();
    const collection = document.querySelectorAll(".collection-item");
    for (let i = 0; i < collection.length; i++) {
        var txtValue = collection[i].textContent;
        if (txtValue.toUpperCase().indexOf(userInput) > -1) {
            collection[i].style.display = "block";
        }
        else {
            collection[i].style.display = "none";
        }
    }
}
 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

            // Remove from DB [Local Storage ...]
            removefromDB(e.target.parentElement.parentElement);
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

// Load from Storage Database 
function loadTasksfromDB() {
    let listofTasks = loadfromDB();
    if (listofTasks.length != 0) {

        listofTasks.forEach(function(eachTask) {

          const li = document.createElement('li');             // Create an li element when the user adds a task
          li.className = 'collection-item';                                                  // Adding a class
          li.appendChild(document.createTextNode(eachTask));            // Create text node and append it 
          const link = document.createElement('a');                        // Create new element for the link 
          link.className = 'delete-item secondary-content';          // Add class and the x marker for a 
          link.innerHTML = '<i class="fa fa-remove"> </i>';
          li.appendChild(link);                                                    // Append link to li
          taskList.appendChild(li);                                            // Append to UL 
        });
    }
}
