
function changeVaule(){
    if(document.getElementById('check').checked){
        document.getElementById('basic-value').innerHTML = '$199.99';
        document.getElementById('professional-value').innerHTML = '$249.99';
        document.getElementById('master-value').innerHTML = '$399.99';
    }else {
        document.getElementById('basic-value').innerHTML = '$19.99';
        document.getElementById('professional-value').innerHTML = '$24.99';
        document.getElementById('master-value').innerHTML = '$39.99';
    }

}