document.addEventListener('DOMContentLoaded', function() {
    const form =document.getElementById('registrationForm');

    form.addEventListener("submit",function(event){
        event.preventDefault();

        //geting form inputs
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const studentId = document.getElementById('id').value;
        const email = document.getElementById('email').value;
        const credit = document.getElementById('credit').value;
        const department = document.getElementById('dpt').value;
        
        //Validation Check
        if (firstName === ""){
            alert("First Name is required.");
            return;
        }

        if (lastName === ""){
            alert("Last Name is required.");
            return;
        }

        if(!studentId.includes("-")){
            alert("Student ID must follow (XX-XXXXX-X) format.");
            return;
        }

        if(!email.endsWith("@student.aiub.edu")){
            alert("Email must be a valid student email, provided by the university.");
            return;
        }

        const creditNum = Number(credit);
        if (credit ==="" || isNaN(creditNum) || creditNum < 0 || creditNum >= 148){
            alert("Credit Completed must be 0 or more, but less than 148.");
            return;
        }

        if (department === ""){
            alert("Please Select a Department where you belong.");
            return;
        }

        alert("Registration Successful!");
        form.submit;

    })
})
