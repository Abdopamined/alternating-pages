document.getElementById('registerbtn').addEventListener('click', register);

function register() {
    console.log("Register Clicked");
    document.getElementById('main').innerHTML = '<div id="formbox"></div>';
    const formContainer = document.getElementById('formbox')
    
    const formHTML = `
        <form id="registerForm" class="absolute hidden">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <label>Gender:</label>
            <div class="radio-group">
                <input type="radio" id="male" name="gender" value="male" required>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" required>
                <label for="female">Female</label>
            </div>
        </form>
        <button id="submitbtn">Submit</button>
    `;
    formContainer.innerHTML = formHTML;
    // setTimeout(() => {
    //     document.getElementById('registerForm').classList.toggle('hidden');
    // }, 2000);


    // -------------------------------------------------------------------
    document.getElementById('submitbtn').addEventListener('click', submitForm);

}



function submitForm() {
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    
    var gender = ' '

    if (document.getElementById('male').checked) {
        gender = "Mr";
    } else if (document.getElementById('female').checked) {
        gender = "Ms";
    }

    console.log("Submit clicked.");
    console.log(firstName + " , " + lastName + " , " + email + " , " + password + " , " + gender);
    
    document.getElementById('main').innerHTML = '<div id="formResults"></div>'
    
    const formResults = document.getElementById('formResults');
    const btn1 = document.createElement('button');
    btn1.id = 'btn1';
    btn1.textContent = 'Welcome!';
    formResults.appendChild(btn1);

    const btn2 = document.createElement('button');
    btn2.id = 'btn2';
    btn2.textContent = gender + '. ' + firstName + ' ' + lastName;
    formResults.appendChild(btn2);

    const btn3 = document.createElement('button');
    btn3.id = 'btn3';
    btn3.textContent = 'You signed in with this email: ' + email;
    formResults.appendChild(btn3);
    
    const btn4 = document.createElement('button');
    btn4.id = 'btn4';
    btn4.textContent = 'Confirm';
    formResults.appendChild(btn4);

    document.getElementById('btn4').addEventListener('click', alert);    
}

function alert() {
    console.log("clicked");
    window.alert("Hi");
    window.location.reload();
}
