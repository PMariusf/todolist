
// Function to add "close" button to each item
function addCloseButton(li) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

// Add functionality for close buttons
function addCloseFunctionality() {
  const closeButtons = document.getElementsByClassName("close");
  for (let i = 0; i < closeButtons.length; i++) {
    if (!closeButtons[i].hasCloseHandler) {
      closeButtons[i].onclick = function () {
        const li = this.parentElement;
        const task = li.textContent.replace("\u00D7", "").trim(); // Get task text without the "×"
        li.style.display = "none"; // Hide the list item
        removeTaskFromStorage(task); // Remove the task from localStorage
      };
      closeButtons[i].hasCloseHandler = true;
    }
  }
}

// Toggle "checked" state when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item
function newElement() {
  const inputValue = document.getElementById("myInput").value.trim();
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(inputValue));
  document.getElementById("myList").appendChild(li);
  document.getElementById("myInput").value = ""; // Clear input field

  addCloseButton(li); // Add close button to the new item
  addCloseFunctionality(); // Apply close functionality
  saveTaskToStorage(inputValue); // Save the task to localStorage
}

// Save task to localStorage
function saveTaskToStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task); // Remove the task from the array
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated array back to localStorage
}

// Load tasks from localStorage
function loadTasksFromStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    document.getElementById("myList").appendChild(li);
    addCloseButton(li); // Add close button to the new item
    addCloseFunctionality(); // Apply close functionality
  });
}

// Add event listeners for button click and Enter key press
const input = document.getElementById("myInput");
const addButton = document.getElementById("addBtn");

// Mouse click event on the "Add" button
addButton.addEventListener('click', newElement);

// Enter key press event on input field
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission
    newElement(); // Call the same function as button click
  }
});

// Load tasks when the page is loaded
window.onload = loadTasksFromStorage;