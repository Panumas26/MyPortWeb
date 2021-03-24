window.onload = pageLoad;
function pageLoad(){
    let clickButton = document.getElementById("myForm");
    clickButton.onsubmit = validateForm;
}

function validateForm() {
    let passMain = document.forms["myForm"]["passwordMain"].value;
    let passReCheck = document.forms["myForm"]["passwordRecheck"].value;

    if (passReCheck != passMain){
        document.getElementById('errormsg').innerHTML = "Recheck Password Incorrect.";
        return false;
    }
    else
    {
        alert("Register Successfull.");
    }
}