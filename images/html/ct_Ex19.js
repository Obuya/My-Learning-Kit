// in Ex9 to Ex15, change the name of the following function properly
function problem19() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  





 
 
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/

  // translate rest of your flowcharts to js here:
  var i;
  for(i = 2; i < 1000; i++){
          if(prime(i) == true){
              alert(i);
          }
   }
   function prime(num){
    var flag = true;
    var d = 2; 
    while(flag == true && d<= (num/2)){
        if(num % d == 0){
            flag = false;
        }
        d += 1;
    }
    return flag;
}

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
 document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
