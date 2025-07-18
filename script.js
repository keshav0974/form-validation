
$(document).ready(function() {

var err="";
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function isValidMobileNumber(mobileNumber) {
  var mobileNumberPattern = /^[0-9]{10}$/;
  return mobileNumberPattern.test(mobileNumber);
}
function isValidPassword(password) {
  // Minimum 6 characters, at least one uppercase letter, and one digit
  var passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passwordPattern.test(password);
}
// Toggle password visibility
$("#togglePass").click(function () {
  var type = $("#pass").attr("type") === "password" ? "text" : "password";
  $("#pass").attr("type", type);
});

// Toggle confirm password visibility
$("#toggleCPass").click(function () {
  var type = $("#cpass").attr("type") === "password" ? "text" : "password";
  $("#cpass").attr("type", type);
});

$("button").click(function() {
  
  $("#error").html("");
  $("#success").html("");
  if($("#email").val()==""){
    err+="<p>email is mandatory</p>"
  }
  else {
    if(isEmail($("#email").val())== false){
    err += " <p>enter a valid email adress</p>"
  };
  }
  if($("#phone").val()==""){
    err+="<p>phone is mandatory</p>"
  }
  else{
    if(isValidMobileNumber($("#phone").val())== false){
    err += " <p>enter a valid mobile no.</p>"  
  };
  }
  if($("#name").val()==""){
      err+="<p> please enter your name</p>"
    };
  
  if($("#pass").val()==""){
    err+="<p>please enter a password</p>"
  }
  else{
    if(isValidPassword($("#pass").val())==false){
      err += "<p>Password must be at least 6 characters long and include 1 uppercase letter and 1 number.</p>"  
    };
  }
  if($("#cpass").val()==""){
    err+="<p>please confirm password</p>"
  }
  else{ 
    if($("#cpass").val()!=$("#pass").val()){
    err+="<p>password didnt match</p>"
  };
  }
  
  if(err == ""){
    $("#success").html("congrats you have succesfully registered");
  }
  else{
    $("#error").html(err);
  };
err="";
  
});

















});
