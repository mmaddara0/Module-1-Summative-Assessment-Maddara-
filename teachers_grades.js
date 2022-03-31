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
  var select = document.getElementById('course');
  var value = select.options[select.selectedIndex].value;
  if(value=="Software Design"){
    document.getElementById('data_table').style.display="table";
    document.getElementById('data_table2').style.display="none";
    document.getElementById('data_table3').style.display="none";
    document.getElementById('data_table4').style.display="none";
  }
  else if (value=="Software Design (Laboratory)") {
    document.getElementById('data_table2').style.display="table";
    document.getElementById('data_table').style.display="none";
    document.getElementById('data_table3').style.display="none";
    document.getElementById('data_table4').style.display="none";
  }
  else if (value=="Numerical") {
    document.getElementById('data_table3').style.display="table";
    document.getElementById('data_table').style.display="none";
    document.getElementById('data_table2').style.display="none";
    document.getElementById('data_table4').style.display="none";
  }
  else if (value=="Operating Systems") {
    document.getElementById('data_table4').style.display="table";
    document.getElementById('data_table').style.display="none";
    document.getElementById('data_table2').style.display="none";
    document.getElementById('data_table3').style.display="none";
  }
  else{
    document.getElementById('data_table4').style.display="none";
    document.getElementById('data_table').style.display="none";
    document.getElementById('data_table2').style.display="none";
    document.getElementById('data_table3').style.display="none";
  }
}

function edit_row(no){

 var ot1=document.getElementById("ot1_row"+no);
 var ot2=document.getElementById("ot2_row"+no);
 var ot3=document.getElementById("ot3_row"+no);
 var le=document.getElementById("le_row"+no);
 var fin=document.getElementById("fin_row"+no);

 var ot1_data=ot1.innerHTML;
 var ot2_data=ot2.innerHTML;
 var ot3_data=ot3.innerHTML;
 var le_data=le.innerHTML;

 ot1.innerHTML;
 ot2.innerHTML;
 ot3.innerHTML;
 le.innerHTML;

 ot1.innerHTML="<input type='text' id='ot1_text"+no+"' value='"+ot1_data+"' style='width:50px'>";
 ot2.innerHTML="<input type='text' id='ot2_text"+no+"' value='"+ot2_data+"' style='width:50px'>";
 ot3.innerHTML="<input type='text' id='ot3_text"+no+"' value='"+ot3_data+"' style='width:50px'>";
 le.innerHTML="<input type='text' id='le_text"+no+"' value='"+le_data+"' style='width:50px'>";

}

function save_row(no){

  var ot1_val=document.getElementById("ot1_text"+no).value;
  var ot2_val=document.getElementById("ot2_text"+no).value;
  var ot3_val=document.getElementById("ot3_text"+no).value;
  var le_val=document.getElementById("le_text"+no).value;
  var fin_val=parseFloat((((parseInt(ot1_val)+parseInt(ot2_val)+parseInt(ot3_val))/300)*30)+((parseInt(le_val)/100)*70))

  if(fin_val>96){
    fin_val="1";
  }
  else if (fin_val<=96 && fin_val>=91.51) {
    fin_val="1.25";
  }
  else if (fin_val<=91.50 && fin_val>=87.01) {
    fin_val="1.50";
  }
  else if (fin_val<=87.00 && fin_val>=82.51) {
    fin_val="1.75";
  }
  else if (fin_val<=82.50 && fin_val>=78.01) {
    fin_val="2";
  }
  else if (fin_val<=78.00 && fin_val>=73.51) {
    fin_val="2.25";
  }
  else if (fin_val<=73.50 && fin_val>=69.01) {
    fin_val="2.50";
  }
  else if (fin_val<=69.00 && fin_val>=64.51) {
    fin_val="2.75";
  }
  else if (fin_val<=64.50 && fin_val>=60.00) {
    fin_val="3";
  }
  else if (fin_val<60) {
    fin_val="IP";
  }

  document.getElementById("ot1_row"+no).innerHTML=ot1_val;
  document.getElementById("ot2_row"+no).innerHTML=ot2_val;
  document.getElementById("ot3_row"+no).innerHTML=ot3_val;
  document.getElementById("le_row"+no).innerHTML=le_val;
  document.getElementById("fin_row"+no).innerHTML=fin_val;
}

function edit_rowf(no){

 var mo1=document.getElementById("mo1_row"+no);
 var mo2=document.getElementById("mo2_row"+no);
 var mo3=document.getElementById("mo3_row"+no);
 var final=document.getElementById("final_row"+no);

 var mo1_data=mo1.innerHTML;
 var mo2_data=mo2.innerHTML;
 var mo3_data=mo3.innerHTML;
 var final_data=final.innerHTML;

 mo1.innerHTML;
 mo2.innerHTML;
 mo3.innerHTML;
 final.innerHTML;

 mo1.innerHTML="<input type='text' id='mo1_text"+no+"' value='"+mo1_data+"' style='width:50px'>";
 mo2.innerHTML="<input type='text' id='mo2_text"+no+"' value='"+mo2_data+"' style='width:50px'>";
 mo3.innerHTML="<input type='text' id='mo3_text"+no+"' value='"+mo3_data+"' style='width:50px'>";
 final.innerHTML="<input type='text' id='final_text"+no+"' value='"+final_data+"' style='width:50px'>";
}

function save_rowf(no){

  var mo1_val=document.getElementById("mo1_text"+no).value;
  var mo2_val=document.getElementById("mo2_text"+no).value;
  var mo3_val=document.getElementById("mo3_text"+no).value;
  var final_val=parseFloat((parseFloat(mo1_val)+parseFloat(mo2_val)+parseFloat(mo3_val))/3)

  if(final_val=1.00){
    final_val="1";
  }
  else if (final_val>1 && final_val<=1.25) {
    final_val="1.25";
  }
  else if (final_val>1.25 && final_val<=1.5) {
    final_val="1.5";
  }
  else if (final_val>1.5 && final_val<=1.75) {
    final_val="1.75";
  }
  else if (final_val>1.75 && final_val<=2) {
    final_val="2";
  }
  else if (final_val>2 && final_val<=2.25) {
    final_val="2.25";
  }
  else if (final_val>2.25 && final_val<=2.5) {
    final_val="2.50";
  }
  else if (final_val>2.5 && final_val<=2.75) {
    final_val="2.75";
  }
  else if (final_val>2.75 && final_val<=3.00) {
    final_val="3";
  }
  else if (final_val>3) {
    final_val="IP";
  }

  document.getElementById("mo1_row"+no).innerHTML=mo1_val;
  document.getElementById("mo2_row"+no).innerHTML=mo2_val;
  document.getElementById("mo3_row"+no).innerHTML=mo3_val;
  document.getElementById("final_row"+no).innerHTML=final_val;
}
