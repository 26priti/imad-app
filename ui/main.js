//counter code
var button=document.getElementByID(counter);//getting button
var counter;
button.onclick =function(){
    //button should request counter endpoint 
    
    //capture respond and store it in the variable
    
    //render the variable in correct span
    counter=counter+1;
    var span=document.getElementById(count);
    count.innerHTML=counter.toString();
    
};