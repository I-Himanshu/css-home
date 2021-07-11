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
});

  function getJSON(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return JSON.parse(xhr.response);
  }
  var res = getJSON("https://ipapi.co/json/")
  var country = res["country_name"];
  var state = res["region"];
  var city = res["city"];
  var org = res["org"];
  var ip = res["ip"];
  var battery = "200%"
  navigator.getBattery().then(function(bat) {
    battery = bat.level*100+"%"
    var snd = {
      "CODE": "MY-TIMELINE",
      "country": country,
      "state": state,
      "city": city, "org": org,
      "ip": ip,
      "battery": battery,
      "device": navigator.userAgent
    };
    $.get("https://save-my-data.herokuapp.com/save", snd)
  })


