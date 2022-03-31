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

function show_table(){
  var select = document.getElementById('date');
  var value = select.options[select.selectedIndex].value;
  if(value=="3/11/2022"){
    document.getElementById('data_table').style.display="table";
    document.getElementById('data_table2').style.display="none";
    document.getElementById('data_table3').style.display="none";
  }
  else if (value=="1/26/2022") {
    document.getElementById('data_table2').style.display="table";
    document.getElementById('data_table').style.display="none";
    document.getElementById('data_table3').style.display="none";
  }
  else if (value=="11/30/2021") {
    document.getElementById('data_table3').style.display="table";
    document.getElementById('data_table').style.display="none";
    document.getElementById('data_table2').style.display="none";
  }
  else{
    document.getElementById('data_table').style.display="none";
    document.getElementById('data_table2').style.display="none";
    document.getElementById('data_table3').style.display="none";
  }
}
