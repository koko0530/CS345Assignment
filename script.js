var signupForm = document.getElementById("trigger-modal");
var openSignupForm = document.getElementById("openRegisterForm");
var closeSignupForm = document.getElementById("closeButton");

openSignupForm.onclick = function(){
    signupForm.style.display = "block";
}

closeSignupForm.onclick = function(){
    signupForm.style.display = "none";

}


