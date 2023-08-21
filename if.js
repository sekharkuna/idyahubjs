
function getValue()
{
    var a = document.getElementById("input_a").value;
    var error = document.getElementById("error")
    console.log("nokkadu",a);

    if(a>=1 && a<=10)
    {
        error.innerHTML = "<span>you understand english! </span>";
        // error.style.color = "green" ;
    }
    else
    {
        error.innerHTML = "Do u understand English?"
    }


}