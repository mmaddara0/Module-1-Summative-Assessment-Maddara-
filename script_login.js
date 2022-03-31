function validate(){
var username = document.getElementById("user").value;
var password = document.getElementById("pass").value;
  if (username == "admin" && password == "admin"){
    window.location.href = "admin.html"
    return true;
    exit();
  }
  else if(username == "student1" && password == "1234"){
    window.location.href = "students.html"
    return true;
    exit();
  }
  else if(username == "teacher1" && password == "1234"){
    window.location.href = "teachers.html"
    return true;
    exit();
  }
  else{
    alert("Invalid login credentials!");
  }
  return false;
}

document.getElementById("pass")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});

document.getElementById("user")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});
