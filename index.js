function validation(){
    var user = document.getElementById('password').value;

    if(user == ""){
        document.getElementById('alertpass').innerHTML="Please fill the username feild";
        return false;
    }
}