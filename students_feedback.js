
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      logo = body.querySelector('.image')
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

logo.addEventListener("click" , () =>{
    window.location = "https://www.google.com";
  })

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";

    }
});


function validate(){
    var name = document.getElementById('new_name');
    var program = document.getElementById('new_program');
    var content = document.getElementById('new_content');


    if (name.value == "") {
      name.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      name.style.border = "";
    }
    if (program.value == "") {
      program.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      program.style.border = "";
    }
    if (content.value == "") {
      content.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      content.style.border = "";
    }
    if(name.value != "" && content.value != "" && program.value != ""){
      alert("Feedback has been sent!");
      return true;
      }
}
