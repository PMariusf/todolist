

// Create a "close" button and append it to each list item
//var myNodelist = document.getElementsByTagName("LI");
//var i;
//for (i = 0; i < myNodelist.length; i++) {//
  //var span = document.createElement("SPAN");
 // var txt = document.createTextNode("\u00D7");
  //span.className = "close";
  //span.appendChild(txt);
  //myNodelist[i].appendChild(span);
//}

// Click on a close button to hide the current list item
//var close = document.getElementsByClassName("close");
//var i;
//for (i = 0; i < close.length; i++) {//
 // close[i].onclick = function() {
 //   var div = this.parentElement;
 //   div.style.display = "none";
 // }
//}

// Add a "checked" symbol when clicking on a list item
//var list = document.querySelector('ul');
//list.addEventListener('click', function(ev) {//
 //if (ev.target.tagName === 'LI') {
  //  ev.target.classList.toggle('checked');
  //}
//}, false);

// Create a new list item when clicking on the "Add" button
//function newElement() {
//  var li = document.createElement("li");
//  var inputValue = document.getElementById("myInput").value;
//  var t = document.createTextNode(inputValue);
//  li.appendChild(t);
 // if (inputValue === '') {
 //   alert("You must write something!");
 // } else {
 //   document.getElementById("myUL").appendChild(li);
//  }
 // document.getElementById("myInput").value = "";

 // var span = document.createElement("SPAN");
 // var txt = document.createTextNode("\u00D7");
 // span.className = "close";

//  span.appendChild(txt);
 // li.appendChild(span);

  //for (i = 0; i < close.length; i++) {
  //  close[i].onclick = function() {
  //    var div = this.parentElement;
  //    div.style.display = "none";
  //  }
 // }
//}

//var input = document.getElementById("myInput");
//input.addEventListener("keydown", function(event) {
  //if (event.key === "Enter") {
  //  event.preventDefault(); // Prevent the default form submission (if any)
  //  newElement();
 // }
//});

//test

function addCloseFunctionality() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  addCloseFunctionality(); // Add functionality to the new close button
}

// Add event listeners for "Enter" key and button click
var input = document.getElementById("myInput");
var addButton = document.getElementById("addBtn");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default behavior (like form submission)
    newElement();
  }
});

addButton.addEventListener("click", function() {
  newElement();
});