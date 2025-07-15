let error = "";  // Container for the error messages.
let email = $("#email");   // Container for the EMail input field.
let phone = $("#number");   // Container for the phone number input field.
let password = $("#password");   // Container for the password input field
let confirmPassword = $("#confirmPassword");   // Container for the password confirming input field.

$("#submitButton").click(function(){   // Function that works when the 'submit' button is clicked.

  if (isValidEmail(email.val()) == false && email.val() != "") {
    error += "<p>Email is not a valid one<br>Valid format: abcd@example.com</p>";   // If email is not in a valid format.
  }
  else if(email.val() == "") {
    error += "<p>Email must be filled in.</p>"   // If email input field is left empty.
  }

  if($.isNumeric(phone.val()) == false && phone.val() != "") {
    error += "<p>Phone number must contain only numbers.</p>";   // If the phone number has numbers also. 
  }
  else if(phone.val().length != 10 && phone.val() != "") {
    error += "<p>Phone number must be 10 characters long.</p>"   //If the phone number is not 10-characters long.
  }
  else if(phone.val() == "") {
    error += "<p>Phone number must be filled in.</p>"   // If the phone number field is left empty.
  }

  if(password.val() != confirmPassword.val() && password.val() != "" && confirmPassword.val() != "") {
    error += "<p>Both the passwords must match.</p>";   // If the password doesn't match the one entered in the confirm password input field.
  }
  
  if(password.val() == "" || confirmPassword.val() == "") {
    error += "<p>Both the passwords must be filled in.</p>"   // If one or more password fields are left empty. 
  }
  
  if(password.val().length <8 && password.val() != "") {
    error += "<p>The PASSWORD must be at least 8-characters long.</p>"   // If the password created is less than 8-characters.
  }
  
  if(/[A-Z]/.test(password.val()) == false && password.val() != "") {
    error += "<p>The PASSWORD must contain at least 1 uppercase letter.</p>"   // If the password doesn't have any uppercase letters.
  }

  if(/[0-9]/.test(password.val()) == false && password.val() != "") {
    error += "<p>The PASSWORD must contain at least 1 number.</p>"   // If the password doesn't contain any numbers.
  }

  if (error == "") {
    $("#errors").css('color', 'green');
    $("#errors").css('border-color', 'green');
    $("#errors").html("Account created!");   // The red error message box.
  }
  else {
    $("#errors").css('color', 'red');
    $("#errors").css('border-color', 'red');
    $("#errors").html(error);   // The green success message box.
    error = "";
  }

})

// Function to check the validity of the email entered.

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Code for the show/hide toggle functionality for passwords.

let toggle = $("#toggle1");

toggle.click(function(){
    if (toggle.html() == "Show") {
        toggle.html("Hide");
    } else if (toggle.html() == "Hide") {
        toggle.html("Show");
    }
    if(toggle.html() == "Hide") {
        $("#password").attr('type', 'text');
    }
    else if (toggle.html() == "Show") {
        $("#password").attr('type', 'password');
    }
})

let secondToggle = $("#toggle2");

secondToggle.click(function(){
    if (secondToggle.html() == "Show") {
        secondToggle.html("Hide");
    } else if (secondToggle.html() == "Hide") {
        secondToggle.html("Show");
    }
    if(secondToggle.html() == "Hide") {
        $("#confirmPassword").attr('type', 'text');
    }
    else if (secondToggle.html() == "Show") {
        $("#confirmPassword").attr('type', 'password');
    }
})

paraskenuskhe