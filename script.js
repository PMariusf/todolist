
// Create "close" buttons for existing list items
const myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {//
  addCloseButton(myNodelist[i]);
}

// Function to add a "close" button to a list item
function addCloseButton(li) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

 //Add "close" functionality
function addCloseFunctionality() {
 const closeButtons = document.getElementsByClassName("close");
  for (let i = 0; i < closeButtons.length; i++) {
    if (!closeButtons[i].hasCloseHandler) {
      closeButtons[i].onclick = function () {
        const li = this.parentElement;
        li.style.display = "none"; // Hide the list item
      };
    closeButtons[i].hasCloseHandler = true; // Mark handler as added
   }
  }
}
addCloseFunctionality(); // Apply to existing items

// Toggle "checked" state for list items
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
}

// Add event listeners for button click and Enter key press
const input = document.getElementById("myInput");
const addButton = document.getElementById("addBtn");

 //Mouse click event on the "Add" button
addButton.addEventListener('click', newElement);

// Enter key press event on input field
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission
   newElement(); // Call the same function as button click
  }
})

