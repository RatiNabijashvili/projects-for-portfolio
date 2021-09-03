function validateForm() {
    let input = document.getElementById("email");
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let p = document.getElementById('main-input-p');
    
    if(document.getElementById("email").value.length == 0) {
        input.style.color = 'hsl(0, 93%, 68%)';
        p.innerHTML = 'The input field is empty'
    }else if(!filter.test(input.value)){
        input.style.color = 'hsl(0, 93%, 68%)';
        p.innerHTML = 'The email address is not formatted correctly';
    }else{
        input.style.color = 'hsl(0, 36%, 70%)';
        p.innerHTML = "";
    }
}
