function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user=="admin" && pass=="1234")
{

localStorage.setItem("user",user)

window.location="dashboard.html"

}
else{

document.getElementById("msg").innerHTML="Wrong Login"

}

}

function logout(){

localStorage.removeItem("user")

window.location="login.html"

}

function submitUpdate(){

let update=document.getElementById("updateText").value

document.getElementById("msg").innerHTML="Update Submitted"

}