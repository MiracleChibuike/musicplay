

function allow(){
    let userData = document.getElementById("useremail").value;
    let userInput = document.getElementById("userpasscode").value;
    if (userData, userInput == 0) {
        alert("Inputs Cannot be Empty");
        return false;
        
    }else{
        alert('You have Succesfully Created an account with us')
    }
    // let userPassworddigit = document.getElementById("userpasscode").length;
    // if (userPassworddigit >=14) {
    //     alert("password cannot exceed 12 characters")
        
    // }else{
    //     console.log("success")
    // }

}
function sendRequest() {
    let userEmail = document.querySelector(".emailInput").value;
    let userCode = document.querySelector(".passwordInput").value;
    if (userEmail, userCode == 0) {
        alert("Inputs Cannot be Empty");
        return false;
        
    }else{
        alert('You have Succesfully Created an account with us')
    }
    
}

function unhide() {
    let hide = document.getElementById("userpasscode");
    if (hide.type == "password") {
        hide.type = "text"
    }else{
        hide.type = "password"
    }
    
}

function showPasscode() {
    let hidePasscode = document.querySelector(".passwordInput");
    if (hidePasscode.type == "password") {
        hidePasscode.type = "text"
    }else{
        hidePasscode.type = "password"
    }
    
}