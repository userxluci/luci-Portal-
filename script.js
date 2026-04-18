function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user === "admin" && pass === "1234"){
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Wrong Login ❌");
  }
}

function pay(plan){
  alert("Selected: " + plan);
  window.location.href = "https://wa.me/91XXXXXXXXXX?text=I want " + plan;
}