
function validate(e) {
	hideErrors();
	if (formHasErrors()) {
		e.preventDefault();
		return false;
	}
	return true;
}

function formHasErrors(){
    let hasErrors = false;

    // validate name
    const name = document.getElementById("name").value;
    if(name.length < 1){
        const error = document.getElementById("name_empty_error");
		error.style.display = "block";
        hasErrors = true;
    }

    // validate phone number
    const phone = document.getElementById("phone").value;
    if(phone.length < 1){
        const error = document.getElementById("phone_empty_error");
		error.style.display = "block";
        hasErrors = true;
    }
    else if(phone.length != 10){
        const error = document.getElementById("phone_input_error");
		error.style.display = "block";
        hasErrors = true;
    }

    // validate email
    const email = document.getElementById("email").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.length < 1){
        const error = document.getElementById("email_empty_error");
		error.style.display = "block";
        hasErrors = true;
    }
    else if(!emailRegex.test(email)){
        const error = document.getElementById("email_input_error");
		error.style.display = "block";
        hasErrors = true;
    }

    // no validation for comments, since they're optional

    return hasErrors;
}
function hideErrors(){
	let error = document.getElementsByClassName("form_error");
	for (let i = 0; i < error.length; i++) {
		error[i].style.display = "none";
	}
}
function resetForm(){
    hideErrors();
}
function load(){
    hideErrors();

    // Add event listener for the form submit
	document.getElementById("submit").addEventListener("click", validate);

    // add event listener for the form reset
    document.getElementById("reset").addEventListener("click", resetForm);
}

document.addEventListener("DOMContentLoaded", load);