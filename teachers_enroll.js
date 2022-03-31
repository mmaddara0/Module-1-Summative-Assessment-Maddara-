
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
    var nameLabel = document.getElementById('name');
    var student = document.getElementById('new_student');
    var studLabel = document.getElementById('stud');
    var program = document.getElementById('new_program');
    var gender = document.getElementById('new_gender');
    var nat = document.getElementById('new_nat');
    var natLabel = document.getElementById('nat');
    var email = document.getElementById('new_email');
    var emailLabel = document.getElementById('email');
    var contact = document.getElementById('new_contact');
    var contLabel = document.getElementById('cont');
    var birth = document.getElementById('new_birth');
    var home = document.getElementById('new_home');

    var validUnits = /^[0-9]*$/;
    var validName = /^[a-zA-Z]*$/;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name.value == "") {
      name.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      name.style.border = "";
    }
    if (student.value == "") {
      student.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      if (student.value.match(validUnits)) {
        student.style.border = "";
        studLabel.innerHTML = "Student ID*"
      }
      else {
        studLabel.innerHTML += " <label style='color:#BF565A'>Invalid ID Number!</label>"
        student.style.border = "1px solid #BF565A";
        return false;
        }
    }
    if (program.value == "") {
      program.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      program.style.border = "";
    }
    if (gender.value == "") {
      gender.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      gender.style.border = "";
    }
    if (nat.value == "") {
      nat.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      if (nat.value.match(validName)) {
        nat.style.border = "";
        natLabel.innerHTML = "Nationality*"
      }
      else {
        natLabel.innerHTML += " <label style='color:#BF565A'>Invalid Input!</label>"
        nat.style.border = "1px solid #BF565A";
        return false;
        }
    }
    if (email.value == "") {
      email.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      if (email.value.match(validEmail)) {
        email.style.border = "";
        emailLabel.innerHTML = "Email Address*"
      }
      else {
        emailLabel.innerHTML += " <label style='color:#BF565A'>Invalid Email Address!</label>"
        email.style.border = "1px solid #BF565A";
        return false;
        }
    }
    if (contact.value == "") {
      contact.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      if (contact.value.match(validUnits)) {
        contact.style.border = "";
        contLabel.innerHTML = "Contact Number*"
      }
      else {
        contLabel.innerHTML += " <label style='color:#BF565A'>Invalid Contact Number!</label>"
        contact.style.border = "1px solid #BF565A";
        return false;
        }
    }
    if (birth.value == "") {
      birth.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      birth.style.border = "";
    }
    if (home.value == "") {
      home.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      home.style.border = "";
    }
    if(name.value != "" && student.value != "" && program.value != "" && gender.value != "" && nat.value != "" && email.value != "" && contact.value != "" && birth.value != "" && home.value != ""){
      add_row();
    }
}

function edit_row(no){

   var name=document.getElementById("name_row"+no);
   var student=document.getElementById("student_row"+no);
   var program=document.getElementById("program_row"+no);
   var gender=document.getElementById("gender_row"+no);
   var nat=document.getElementById("nat_row"+no);
   var email=document.getElementById("email_row"+no);
   var cont=document.getElementById("cont_row"+no);
   var birth=document.getElementById("birth_row"+no);
   var home=document.getElementById("home_row"+no);

   var name_data=name.innerHTML;
   var student_data=student.innerHTML;
   var program_data=program.innerHTML;
   var gender_data=gender.innerHTML;
   var nat_data=nat.innerHTML;
   var email_data=email.innerHTML;
   var cont_data=cont.innerHTML;
   var birth_data=birth.innerHTML;
   var home_data=home.innerHTML;

   name.innerHTML;
   student.innerHTML;
   program.innerHTML;
   gender.innerHTML;
   nat.innerHTML;
   email.innerHTML;
   cont.innerHTML;
   birth.innerHTML;
   home.innerHTML;

   name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
   student.innerHTML="<input type='text' id='student_text"+no+"' value='"+student_data+"' style='width:100px'>";
   program.innerHTML="<select type='text' id='program_text"+no+"' value='"+program_data+"' style='width:90px'><option value='BS-CpE'>BS-CpE</option><option value='BS-ECE'>BS-ECE</option><option value='BS-ME'>BS-ME</option><option value='BS-CE'>BS-CE</option></select>";
   gender.innerHTML="<select type='text' id='gender_text"+no+"' value='"+gender_data+"' style='width:90px'><option value='Male'>Male</option><option value='Female'>Female</option></select>";;
   nat.innerHTML="<input type='text' id='nat_text"+no+"' value='"+nat_data+"' style='width:80px'>";
   email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"' style='width:200px'>";
   cont.innerHTML="<input type='text' id='cont_text"+no+"' value='"+cont_data+"' style='width:120px'>";
   birth.innerHTML="<input type='date' id='birth_text"+no+"' name='d1'>";
   home.innerHTML="<input type='text' id='home_text"+no+"' value='"+home_data+"' style='width:120px'>";
}

function save_row(no){

   var name_val=document.getElementById("name_text"+no).value;
   var student_val=document.getElementById("student_text"+no).value;
   var program_val=document.getElementById("program_text"+no).value;
   var gender_val=document.getElementById("gender_text"+no).value;
   var nat_val=document.getElementById("nat_text"+no).value;
   var email_val=document.getElementById("email_text"+no).value;
   var cont_val=document.getElementById("cont_text"+no).value;
   var birth_val=document.getElementById("birth_text"+no).value;
   var home_val=document.getElementById("home_text"+no).value;


   document.getElementById("name_row"+no).innerHTML=name_val;
   document.getElementById("student_row"+no).innerHTML=student_val;
   document.getElementById("program_row"+no).innerHTML=program_val;
   document.getElementById("gender_row"+no).innerHTML=gender_val;
   document.getElementById("nat_row"+no).innerHTML=nat_val;
   document.getElementById("email_row"+no).innerHTML=email_val;
   document.getElementById("cont_row"+no).innerHTML=cont_val;
   document.getElementById("birth_row"+no).innerHTML=birth_val;
   document.getElementById("home_row"+no).innerHTML=home_val;
}

function delete_row(no){

   document.getElementById("row"+no+"").outerHTML="";
}

function add_row(){

   var new_name=document.getElementById("new_name").value;
   var new_student=document.getElementById("new_student").value;
   var new_program=document.getElementById("new_program").value;
   var new_gender=document.getElementById("new_gender").value;
   var new_nat=document.getElementById("new_nat").value;
   var new_email=document.getElementById("new_email").value;
   var new_contact=document.getElementById("new_contact").value;
   var new_birth=document.getElementById("new_birth").value;
   var new_home=document.getElementById("new_home").value;

   var table=document.getElementById("data_table");
   var table_len=(table.rows.length);
   var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='student_row"+table_len+"'>"+new_student+"</td><td id='program_row"+table_len+"'>"+new_program+"</td><td id='gender_row"+table_len+"'>"+new_gender+"</td><td id='nat_row"+table_len+"'>"+new_nat+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='cont_row"+table_len+"'>"+new_contact+"</td><td id='birth_row"+table_len+"'>"+new_birth+"</td><td id='home_row"+table_len+"'>"+new_home+"</td><td><button class='edit' id='edit_button"+table_len+"' onclick='edit_row("+table_len+")'><i class='bx bx-pencil icon'></i></button><button class='save' id='save_button"+table_len+"' onclick='save_row("+table_len+")'><i class='bx bx-save icon'></i></button><button class='delete' id='delete_button"+table_len+"' onclick='delete_row("+table_len+")'><i class='bx bx-trash icon'></i></button></td></tr>";


   document.getElementById("new_name").value="";
   document.getElementById("new_student").value="";
   document.getElementById("new_program").value="";
   document.getElementById("new_gender").value="";
   document.getElementById("new_nat").value="";
   document.getElementById("new_email").value="";
   document.getElementById("new_contact").value="";
   document.getElementById("new_birth").value="";
   document.getElementById("new_home").value="";
}
