var random1=Math.floor(Math.random()*6)+1;
var imageSource="images/dice"+random1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);

var random2=Math.floor(Math.random()*6)+1;
var imageSource2="images/dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);

if(random1>random2)
 document.querySelector("h1").innerHTML="🎁Player 1 Win";
 else if (random1<random2) {
   document.querySelector("h1").innerHTML="Player 2 Win🎁";

 }
 else {
   document.querySelector("h1").innerHTML="Draw 😀😀";

 }
