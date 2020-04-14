 // dropdown menu 

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// pricing information: show pricing details on click for smaller screens

function showBtn1() {
  var x = document.getElementById("showMe1");
  x.style.display = "block";
}

function showBtn2() {
  var x = document.getElementById("showMe2");
  x.style.display = "block";
}

function showBtn3() {
  var x = document.getElementById("showMe3");
  x.style.display = "block";
}

function showBtn4() {
  var x = document.getElementById("showMe4");
  x.style.display = "block";
}

