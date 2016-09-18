<!--change colors-->
var colors = "#";
var randomNum;
for(var i =0; i<3;i++){
  randomNum=Math.floor(Math.random()*10);
  colors += randomNum;
}
document.getElementById("block").style.backgroundColor = colors;

<!--change quote img when pressing button-->
function getQuote(a){
  document.getElementById("img").src="vendor/quotes/slide_"+a+".jpg";
}
getQuote(randomNum=Math.floor(Math.random()*14));

$(document).ready(function() {
  $(".button").click(
    function(){
      getQuote(randomNum=Math.floor(Math.random()*14));
    }
  );
});
