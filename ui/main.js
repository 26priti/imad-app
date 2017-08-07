console.log('Loaded!');
//change the text of main text div
var element = document.getElementById("main.text");
element.innerHTML="new Value";
//make image move
var img = document.getElementById('madi');
img.onclick = function(){
   img.style.marginleft= '100 px';
};