function validateForm2() {
  var username = document.getElementById("username").value;
  var passwd = document.getElementById("password").value;
  
  alert("Thanks for signing in " + username + "!");
  return false; 
}

function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mname = document.getElementById("mname").value;
  
  alert("Congratulations on taking the first step toward your artistic journey  " + fname + " " + mname + " " + lname + "!");
  return false; // Prevents the form from being submitted (just for testing purposes)
}


const menu = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menu.addEventListener('click',() => {
  navbarLinks.classList.toggle('active')
})

var header = document.getElementById("navbar-links");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}