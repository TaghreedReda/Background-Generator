var css =document.querySelector("h3");
var color1=document.querySelector(".color1");
var body=document.getElementById("Gradient");

//console.log(body);
color1.addEventListener("input",function(){
    body.style.background="linear-gradient(to left ," + color1.value +", yellow"+ ")";
})
