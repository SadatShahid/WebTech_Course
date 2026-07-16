document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const studentListBody = document.getElementById('studentListBody');

    // Array to hold registered student objects
    let registeredStudents = [];

    if (!form) {
        console.error("Form with ID 'registrationForm' not found.");
        return;
    }

    form.addEventListener("submit", function(event){
        event.preventDefault(); // Prevents default browser reload

        // 1. Fetch form inputs
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const studentIdInput = document.getElementById('id');
        const emailInput = document.getElementById('email');
        const creditInput = document.getElementById('credit');
        const departmentSelect = document.getElementById('dpt');

        // Extract trimmed values
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const studentId = studentIdInput.value.trim();
        const email = emailInput.value.trim();
        const credit = creditInput.value.trim();
        const department = departmentSelect.value;

        // 2. Reset errors and red input borders
        const errorLabels = document.querySelectorAll('.error-msg');
        errorLabels.forEach(label => label.textContent = "");

        const inputs = [firstNameInput, lastNameInput, studentIdInput, emailInput, creditInput, departmentSelect];
        inputs.forEach(input => input.classList.remove('invalid-input'));

        let isValid = true;

        // 3. Validation Logic (Label Tracking)
        if (firstName === "") {
            document.getElementById('firstNameError').textContent = "First Name is required.";
            firstNameInput.classList.add('invalid-input');
            isValid = false;
        }

        if (lastName === "") {
            document.getElementById('lastNameError').textContent = "Last Name is required.";
            lastNameInput.classList.add('invalid-input');
            isValid = false;
        }

        if (!studentId.includes("-")) {
            document.getElementById('idError').textContent = "Student ID must follow (XX-XXXXX-X) format.";
            studentIdInput.classList.add('invalid-input');
            isValid = false;
        }

        if (!email.endsWith("@student.aiub.edu")) {
            document.getElementById('emailError').textContent = "Email must be a valid student email, provided by the university.";
            emailInput.classList.add('invalid-input');
            isValid = false;
        }

        const creditNum = Number(credit);
        if (credit === "" || isNaN(creditNum) || creditNum < 0 || creditNum >= 148) {
            document.getElementById('creditError').textContent = "Credit Completed must be 0 or more, but less than 148.";
            creditInput.classList.add('invalid-input');
            isValid = false;
        }

        if (department === "") {
            document.getElementById('dptError').textContent = "Please Select a Department where you belong.";
            departmentSelect.classList.add('invalid-input');
            isValid = false;
        }

        // 4. Update the student list table on success
        if (isValid) {
            const studentObj = {
                firstName: firstName,
                lastName: lastName,
                studentId: studentId,
                email: email,
                credit: credit,
                department: department
            };

            registeredStudents.push(studentObj);
            updateStudentTable();
            form.reset(); // clear form inputs
        }
    });

    // Renders the student table
    function updateStudentTable() {
        studentListBody.innerHTML = "";

        if (registeredStudents.length === 0) {
            studentListBody.innerHTML = `
                <tr id="emptyRow">
                    <td colspan="6" class="no-data">No students registered yet.</td>
                </tr>
            `;
            return;
        }

        registeredStudents.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.studentId}</td>
                <td>${student.email}</td>
                <td>${student.credit}</td>
                <td>${student.department}</td>
            `;
            studentListBody.appendChild(row);
        });
    }
});