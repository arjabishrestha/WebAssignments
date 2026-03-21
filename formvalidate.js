document.addEventListener('DOMContentLoaded', function() {
    displayUsers();
});

function validate(){

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pw = document.getElementById("pword").value
    let conpw = document.getElementById("conpw").value
    let age = document.getElementById("age").value
    let check = document.getElementById("check").checked

    let empty=document.getElementById("empty")
    let errorname=document.getElementById("wrongname")
    let erroremail=document.getElementById("wrongemail")
    let errorpw=document.getElementById("wrongpw")
    let errorconpw=document.getElementById("wrongconpw")
    let errorage=document.getElementById("wrongage")
    let errorchecked=document.getElementById("wrongchecked")

    let validation=true

    errorname.innerHTML = ""
    erroremail.innerHTML = ""
    errorpw.innerHTML = ""
    errorconpw.innerHTML = ""
    errorage.innerHTML = ""
    errorchecked.innerHTML = ""
    
    if (name==="" || email==="" || pw==="" || conpw==="" || age===""){
        empty.innerHTML="All fields are required";
        validation=false;
    }  

    if (name.length < 3){
        errorname.innerHTML= "Name must have at least 3 characters";
        validation=false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        erroremail.innerHTML="Invalid email id";
        validation=false;
    }

    if (pw.length < 6){
        errorpw.innerHTML= "Password must be at least 6 characters";
        validation=false;
    }

    if (pw!==conpw){
        errorconpw.innerHTML="Passwords do not match";
        validation=false;
    }

    if (age<18){
        errorage.innerHTML="Age must be 18 or above";
        validation=false;
    }

    if(!check){
        errorchecked.innerHTML="Checkbox must be checked"
        validation=false;
    }
    if (validation === true) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                erroremail.innerHTML = "User already registered!";
                validation = false;
                break;
            }
        }
    }

    if(validation===true){
        window.alert("Registration Successful")
        let newUser = {
            name: name,
            email: email,
            age: age
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("regForm").reset();
        displayUsers();
    }
}
function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";
    if (users.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='4' align='center'>No registered users</td></tr>";
        return;
    }
    for (let i = 0; i < users.length; i++) {
        tableBody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
                <td>${users[i].age}</td>
            </tr>
        `;
    }
}
function clearAllUsers() {
    localStorage.removeItem("users");
    document.getElementById("userTableBody").innerHTML = "";
    alert("All users cleared!");
    displayUsers();
}



