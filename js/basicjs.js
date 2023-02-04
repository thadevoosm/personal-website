/* the variable Aand hiding/visibility feature when the width is less than 900px*/

var close = document.getElementById("close");
var lis = document.getElementById("one");
 close.addEventListener("click",function(){
    var items = one.getElementsByTagName("li");
    for(var i=0; 1< items.length; i++){
        if(items[i].style.display=="block"){
            items[i].style.display= "none";
        } else{
            items[i].style.display = "block";
        }
    }
 });