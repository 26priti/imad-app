//counter code
var button=document.getElementByID(counter);//getting button

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
    //not done yet
    };
    
    //make request
    request.open('GET', "http://priti26jadhav.imad.hasura-app.io/counter", true);
    request.send(null);
};