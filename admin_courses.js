const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      logo = body.querySelector('.image')
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

var globalVar;

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

function show_add(){
    document.getElementById('label1').style.display = "block";
    document.getElementById('wrapper1').style.display = "block";
    document.getElementById('newb').style.display = "none";
    document.getElementById('label2').style.display = "none";
    document.getElementById('wrapper2').style.display = "none";
}

function validate(){
    var name = document.getElementById('new_name');
    var code = document.getElementById('new_code');
    var cat = document.getElementById('new_cat');
    var units = document.getElementById('new_units');
    var status = document.getElementById('new_stat');
    var inst = document.getElementById('new_inst');
    var unitsLabel = document.getElementById('units');

    var validUnits = /^[0-9]*$/;

    if (name.value == "") {
      name.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      name.style.border = "";
    }
    if (code.value == "") {
      code.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      code.style.border = "";
    }
    if (cat.value == "") {
      cat.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      cat.style.border = "";
    }
    if (units.value == "") {
      units.style.border = "1px solid #BF565A";
      return false;
    }
    else{
        if (units.value.match(validUnits)) {
          units.style.border = "";
          unitsLabel.innerHTML = "Units*"
        }
        else {
          unitsLabel.innerHTML += " <label style='color:#BF565A'>Invalid value!</label>"
          units.style.border = "1px solid #BF565A";
          return false;
      }
    }
    if (status.value == "") {
      status.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      status.style.border = "";
    }
    if (inst.value == "") {
      inst.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      inst.style.border = "";
    }
    if(name.value != "" && cat.value != "" && units.value != "" && status.value != "" && inst.value != ""){
      add_row();
    }
}

function validate2(){
    var name = document.getElementById('new_name2');
    var code = document.getElementById('new_code2');
    var cat = document.getElementById('new_cat2');
    var units = document.getElementById('new_units2');
    var status = document.getElementById('new_stat2');
    var inst = document.getElementById('new_inst2');
    var unitsLabel = document.getElementById('units2');

    var validUnits = /^[0-9]*$/;

    if (name.value == "") {
      name.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      name.style.border = "";
    }
    if (code.value == "") {
      code.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      code.style.border = "";
    }
    if (cat.value == "") {
      cat.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      cat.style.border = "";
    }
    if (units.value == "") {
      units.style.border = "1px solid #BF565A";
      return false;
    }
    else{
        if (units.value.match(validUnits)) {
          units.style.border = "";
          unitsLabel.innerHTML = "Units*"
        }
        else {
          unitsLabel.innerHTML += " <label style='color:#BF565A'>Invalid value!</label>"
          units.style.border = "1px solid #BF565A";
          return false;
      }
    }
    if (status.value == "") {
      status.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      status.style.border = "";
    }
    if (inst.value == "") {
      inst.style.border = "1px solid #BF565A";
      return false;
    }
    else{
      inst.style.border = "";
    }
    if(name.value != "" && cat.value != "" && units.value != "" && status.value != "" && inst.value != ""){
      edit_row();
    }
}

function show_edit(no){

   document.getElementById('label2').style.display = "block";
   document.getElementById('wrapper2').style.display = "block";
   document.getElementById('label1').style.display = "none";
   document.getElementById('wrapper1').style.display = "none";
   document.getElementById('newb').style.display = "none";

   document.getElementById("new_name2").value = document.getElementById("number" + no).innerHTML;
   document.getElementById("new_code2").value = document.getElementById("topic" + no).innerHTML;
   document.getElementById("new_inst2").value = document.getElementById("text" + no).innerHTML;
   document.getElementById("new_stat2").value = document.getElementById("stat" + no).innerHTML;
   document.getElementById("new_units2").value = document.getElementById("units" + no).innerHTML;
   document.getElementById("new_cat2").value = document.getElementById("cat" + no).innerHTML;

   globalVar = no;
}

function delete_box(no){
   var val = document.getElementById('counter').innerHTML;
   var i = parseInt(val);

   var parent = document.getElementById('overview');
   var child = document.getElementById("cloner"+no);
   parent.removeChild(child);

   i--;
   document.getElementById("counter").innerHTML = i;
}

function edit_row(){

   var no = globalVar;

   var new_name=document.getElementById("new_name2").value;
   var new_code=document.getElementById("new_code2").value;
   var new_inst=document.getElementById("new_inst2").value;

   document.getElementById("topic" + no).innerHTML = new_code;
   document.getElementById("number" + no).innerHTML = new_name;
   document.getElementById("text" + no).innerHTML = new_inst;

   document.getElementById('label2').style.display = "none";
   document.getElementById('wrapper2').style.display = "none";
   document.getElementById('newb').style.display = "block";
}

function save_row(no){

   var name_val=document.getElementById("name_text"+no).value;
   var cat_val=document.getElementById("cat_text"+no).value;
   var units_val=document.getElementById("units_text"+no).value;
   var stat_val=document.getElementById("stat_text"+no).value;
   var inst_val=document.getElementById("inst_text"+no).value;

   document.getElementById("name_row"+no).innerHTML=name_val;
   document.getElementById("cat_row"+no).innerHTML=cat_val;
   document.getElementById("units_row"+no).innerHTML=units_val;
   document.getElementById("stat_row"+no).innerHTML=stat_val;
   document.getElementById("inst_row"+no).innerHTML=inst_val;
}


function add_row(){

   var val = document.getElementById('counter').innerHTML;
   var i = parseInt(val);

   var today = new Date();
   var dateToday = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

   var new_name=document.getElementById("new_name").value;
   var new_code=document.getElementById("new_code").value;
   var new_cat=document.getElementById("new_cat").value;
   var new_units=document.getElementById("new_units").value;
   var new_date=dateToday;
   var new_stat=document.getElementById("new_stat").value;
   var new_inst=document.getElementById("new_inst").value;

   var original = document.getElementById("cloner" + i);
   i++;
   document.getElementById("counter").innerHTML = i;
   var clone = original.cloneNode(true);
   clone.id = "cloner" + i;
   clone.getElementsByClassName("box-topic")[0].id = "topic" + i;
   clone.getElementsByClassName("number")[0].id = "number" + i;
   clone.getElementsByClassName("text")[0].id = "text" + i;
   clone.getElementsByClassName("cat")[0].id = "cat" + i;
   clone.getElementsByClassName("units")[0].id = "units" + i;
   clone.getElementsByClassName("stat")[0].id = "stat" + i;
   clone.getElementsByTagName('i')[1].setAttribute( "onClick", "show_edit('"+i+"');" );
   clone.getElementsByTagName('i')[2].setAttribute( "onClick", "delete_box('"+i+"');" );
   if (new_stat=="Active"){

     clone.getElementsByClassName("box-topic")[0].innerHTML = new_code;
   }
   else{
     clone.getElementsByClassName("box-topic")[0].innerHTML = new_code;
   }
   clone.getElementsByClassName("number")[0].innerHTML = new_name;
   clone.getElementsByClassName("text")[0].innerHTML = new_inst;

   var reference = document.getElementById("newb");

   reference.before(clone);

   document.getElementById('label1').style.display = "none";
   document.getElementById('wrapper1').style.display = "none";
   document.getElementById('newb').style.display = "block";

   document.getElementById("new_name").value="";
   document.getElementById("new_code").value="";
   document.getElementById("new_cat").value="";
   document.getElementById("new_units").value="";
   document.getElementById("new_date").value="";
   document.getElementById("new_stat").value="";
   document.getElementById("new_inst").value="";
}
