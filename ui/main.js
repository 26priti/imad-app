//counter code
var button = document.getElementById('counter');//getting button

button.onclick = function(){
    //button should request counter endpoint 
    var request= new XMLHttpRequest();
    
    //capture respond and store it in the variable
    request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE) {
          if(request.status===200){
              var counter = request.responseText;
              var span= document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //not done yet
    };
   //make request
    request.open('GET', "http://priti26jadhav.imad.hasura-app.io/counter", true);
    request.send(null);
    
};