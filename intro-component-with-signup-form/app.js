function validateForm() {
    let firstName = document.getElementById("first-name-error-msg");
    let firstNameImg = document.getElementById('first-name-error-img');
    let firstNameInput = document.getElementById("first-name");
    let lastName = document.getElementById("last-name-error-msg");
    let lastNameImg = document.getElementById('last-name-error-img');
    let lastNameInput = document.getElementById("last-name");
    let email = document.getElementById("email-error-msg");
    let emailImg = document.getElementById('email-error-img');
    let emailInput = document.getElementById("email");
    let password = document.getElementById("password-error-msg");
    let passwordImg = document.getElementById('password-error-img');
    let passwordInput = document.getElementById("password");
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let freeTrial = document.getElementById('free-trial');
    let mainContainer = document.getElementById('main-container');
    
    if(document.getElementById("first-name").value.length == 0) {
        firstNameInput.style.color = 'hsl(0, 100%, 74%)';
        firstNameInput.style.marginTop = '0';
        firstName.innerHTML = 'First Name cannot be empty';
        firstName.style.display = 'block';
        firstNameImg.setAttribute('src', './images/icon-error.svg');
        freeTrial.style.marginTop = '80px';
        mainContainer.style.top = '160px';
        mainContainer.style.height = '470px';
    }else {
        firstNameInput.style.color = 'hsl(246, 25%, 77%)';
        firstName.innerHTML = '';
        firstNameInput.style.marginTop = '20px';
        firstNameImg.style.display = 'none';
        freeTrial.style.marginTop = '120px';
        mainContainer.style.top = '200px';
        mainContainer.style.height = '400px';
    }
    if(document.getElementById("last-name").value.length == 0){
        lastNameInput.style.color = 'hsl(0, 100%, 74%)';
        lastNameInput.style.marginTop = '0';
        lastName.innerHTML = 'Last Name cannot be empty';
        lastName.style.display = 'block';
        lastNameImg.setAttribute('src', './images/icon-error.svg');
        freeTrial.style.marginTop = '80px';
        mainContainer.style.top = '160px';
        mainContainer.style.height = '470px';
    }else {
        lastNameInput.style.color = 'hsl(246, 25%, 77%)';
        lastName.innerHTML = '';
        lastNameInput.style.marginTop = '20px';
        lastNameImg.style.display = 'none';
        freeTrial.style.marginTop = '120px';
        mainContainer.style.top = '200px';
        mainContainer.style.height = '400px';
    }
    if(!filter.test(emailInput.value)){
        emailInput.style.color = 'hsl(0, 93%, 68%)';
        emailInput.style.marginTop = '0';
        email.innerHTML = 'Looks like this is not an email';
        email.style.display = 'block';
        emailImg.setAttribute('src', './images/icon-error.svg');
        freeTrial.style.marginTop = '80px';
        mainContainer.style.top = '160px';
        mainContainer.style.height = '470px';
    }else {
        emailInput.style.color = 'hsl(246, 25%, 77%)';
        email.innerHTML = '';
        emailInput.style.marginTop = '20px';
        emailImg.style.display = 'none';
        freeTrial.style.marginTop = '120px';
        mainContainer.style.top = '200px';
        mainContainer.style.height = '400px';
    }
    if(document.getElementById("password").value.length == 0){
        passwordInput.style.color = 'hsl(0, 100%, 74%)';
        passwordInput.style.marginTop = '0';
        password.innerHTML = 'Password Cannot be empty';
        password.style.display = 'block';
        passwordImg.setAttribute('src', './images/icon-error.svg');
        freeTrial.style.marginTop = '80px';
        mainContainer.style.top = '160px';
        mainContainer.style.height = '470px';
    }else {
        passwordInput.style.color = 'hsl(246, 25%, 77%)';
        password.innerHTML = '';
        passwordInput.style.marginTop = '20px';
        passwordImg.style.display = 'none';
        freeTrial.style.marginTop = '120px';
        mainContainer.style.top = '200px';
        mainContainer.style.height = '400px';
    }
}
