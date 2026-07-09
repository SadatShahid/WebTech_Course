let totalCount = 0;

function registration() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;

  let hasNameError = true;
  let hasEmailError = true;
  // ........
  let hasPassError = true;

  if (!name) {
    document.getElementById("nameError").innerHTML = "Name can not be empty";
    document.getElementById("nameError").style.color = "red";
    hasNameError = true;
  } else if (name.length < 3) {
    document.getElementById("nameError").innerHTML =
      "Name must be at least 3 char";
    document.getElementById("nameError").style.color = "red";
    hasNameError = true;
  } else {
    document.getElementById("nameError").innerHTML = "";
    hasNameError = false;
  }

  if (!email) {
    document.getElementById("emailError").innerHTML =
      "Email is a required fireld";
    document.getElementById("nameError").style.color = "red";
    hasEmailError = true;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").innerHTML =
      "Please provide a valid email address";
    document.getElementById("nameError").style.color = "red";
    hasEmailError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
    hasEmailError = false;
  }

  if (!hasNameError && !hasEmailError) {
    document.getElementById("totalRegistrations").innerHTML = ++totalCount;
  }


  // ...................

  if (!pass) {
      document.getElementById("passError").innerHTML = "To submit the form, please provide your password";
      document.getElementById("passError").style.color = "red";
  } 

  else if (pass === "sadat123") {
      document.getElementById("passError").innerHTML = "Password Correct";
      document.getElementById("passError").style.color = "green";
  } 
 
  else {
      document.getElementById("passError").innerHTML = "Password Incorrect";
      document.getElementById("passError").style.color = "red";
  }

  return false;
}