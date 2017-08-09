//counter code
var button=document.getElementByID(counter);//getting button
var counter;
button.onclick =function(){ 
    //button should request counter endpoint with xmlHTTP request
    var request = new XMLHttpRequest();
    
    //capture respond and store it in the variable
    request.onreadystatechange = function(){
    if(resquest.readyState===XMlHttprequest.DONE) {
    //take action
    if(request.States===200){
      var counter=request.responseText;
      var span=document.getElementById('count');
      count.innerHTML=counter.toString(); 
        
    }
    }
    };
    
    //render the variable in correct span
    counter =counter + 1;
};