console.log('Loaded!');
//change the text of main text div
var element = document.getElementById("main.text");
element.innerHTML="new Value";
//make image move
var img = document.getElementById('madi');
var marginleft=0;
function moveright(){
  marginleft=marginleft+1;
  img.style.marginleft+px;
}
img.onclick = function(){
    var interval=  setInterval(moveright,  50);
};