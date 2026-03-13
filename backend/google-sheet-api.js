const API_URL="https://script.google.com/macros/s/AKfycbw9BIHeWBwXOfeZ85AevN2RK4JI6y8NDtvZ2gya2LXy2qzl2N71hmLXhl0qJBRPH_R_qQ/exec"

function assignTask(){

let task=document.getElementById("taskTitle").value
let member=document.getElementById("member").value
let deadline=document.getElementById("deadline").value

if(task=="" || deadline==""){
document.getElementById("msg").innerHTML="⚠️ Fill all fields"
return
}

fetch(API_URL,{

method:"POST",

body:JSON.stringify({

task:task,
member:member,
deadline:deadline

})

})

.then(res=>res.text())

.then(data=>{

document.getElementById("msg").innerHTML="✅ Task Assigned Successfully"

document.getElementById("taskTitle").value=""
document.getElementById("deadline").value=""

})

.catch(error=>{

document.getElementById("msg").innerHTML="❌ Server Error"

})

}



function loadTasks(){

fetch(API_URL)

.then(res=>res.json())

.then(data=>{

let table=""

for(let i=1;i<data.length;i++){

table+=`

<tr>

<td>${data[i][0]}</td>
<td>${data[i][1]}</td>
<td>${data[i][2]}</td>
<td>${data[i][3]}</td>

</tr>

`

}

if(document.getElementById("taskTable")){
document.getElementById("taskTable").innerHTML=table
}

})

}



window.onload=function(){

if(document.getElementById("taskTable")){
loadTasks()
}

}