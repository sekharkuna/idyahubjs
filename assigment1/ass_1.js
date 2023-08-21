var db_username  = "sekhar";
var db_password = "sekharKuna";


function submit()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var err = document.getElementById("error")
    var h1 = document.getElementsByTagName("h1")[0];
    var login_form = document.getElementsByClassName("login-container")[0];
    
    if(username == db_username)
    {
        if(password == db_password)
        {
            h1.innerHTML= "Welcome";
            err.innerHTML="";
            login_form.style.display="none";
        }
        else 
        {
            
            err.innerHTML = "Invalid credentials"
        }
    }
    else 
    {
        err.innerHTML = "Username doesn't exist";

    }


}