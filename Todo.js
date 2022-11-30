

function userValidation() {
    let Username = document.getElementById("Username");
    let pwd = document.getElementById("Password");
    if ((Username.value == "Admin") && (pwd.value == "12345")){
        Result.innerHTML = "Valid Credentials";
        Result.style.color = "green";
       document.querySelector("form").action = "index.html";
        return true
    }
    else {
        Result.innerHTML = "Invalid Credentials";
        Result.style.color = "red";
        return false
    }
}


