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

function myFunction(){

   var today = new Date();
   var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

   document.getElementById('date').innerHTML = date;
}

function validate(){

   var title = document.getElementById('new_name');
   var author = document.getElementById('new_author');
   var content = document.getElementById('new_content');
   if (title.value == "") {
     title.style.border = "1px solid #BF565A";
     return false;
   }
   else{
     title.style.border = "";
   }
   if (author.value == "") {
     author.style.border = "1px solid #BF565A";
     return false;
   }
   else{
     author.style.border = "";
   }
   if (content.value == "") {
     content.style.border = "1px solid #BF565A";
     return false;
   }
   else{
     content.style.border = "";
   }
   if(title.value != "" && author.value != "" && content.value != ""){
     add_row();
   }
}


function add_feed(){

   alert("Feedback has been sent!");
   return true;
   window.location = "admin.html"
}


function delete_row(no){

   document.getElementsByClassName("row"+no+"")[2].outerHTML="";
   document.getElementsByClassName("row"+no+"")[1].outerHTML="";
   document.getElementsByClassName("row"+no+"")[0].outerHTML="";
}

function add_row(){

   var today = new Date();
   var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var dateTime = date+' '+time;

   var new_name=document.getElementById("new_name").value;
   var new_content=document.getElementById("new_content").value;
   var new_author=document.getElementById("new_author").value;

   var table=document.getElementById("data_table2");
   var table_len=(table.rows.length);
   var row = table.insertRow(table_len).outerHTML="<tr class='row"+table_len+"'><td id='name_row"+table_len+"'><h3>"+new_name+"</h3></td></tr>";

   var row = table.insertRow(table_len+1).outerHTML="<tr class='row"+table_len+"' style='width:100%'><td id='content_row"+table_len+"'>"+new_content+"</td><td><button class='delete' onclick='delete_row("+table_len+")'><i class='bx bx-trash icon'></i></button></td></tr>";

   var row = table.insertRow(table_len+2).outerHTML="<tr class='row"+table_len+"'><td id='author_row"+table_len+"'><h4>"+"Posted on "+dateTime+" "+ "by "+new_author+"</h4><br></td></tr>";

   document.getElementById("new_name").value="";
   document.getElementById("new_content").value="";
   document.getElementById("new_author").value="";
}
