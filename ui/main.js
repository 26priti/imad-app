//counter code
var button = document.getElementById('counter');//getting button
var counter = 0;
button.onclick = function(){
    //button should request counter endpoint 
    
    //capture respond and store it in the variable
    
    //render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');//count is the id in index.html
    span.innerHTML = counter.toString();
    
};