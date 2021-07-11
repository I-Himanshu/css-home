door= document.querySelector(".door");
var audio = new Audio("./src/door-open.mp3");

//document.querySelector(".house").style.transform="scale("+innerWidth/980+") translate(-50%,-50%)";
onresize= function() {
document.querySelector(".house").style.transform="scale("+innerWidth/980+") translate(-50%,-50%)";
}
//alert(innerWidth/980)
door.addEventListener("click",function(){
  door.classList.toggle("open");
  audio.play()
})
