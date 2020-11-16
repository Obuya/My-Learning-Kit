// in Ex9 to Ex15, change the name of the following function properly
function problem17() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  





 
 
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/

  // translate rest of your flowcharts to js here:
  var num = parseInt(prompt("enter a number:",""));
  var flag = true;
  var d = 2; 
  while(flag == true && d<= (num/2)){
      if(num % d == 0){
          flag = false;
      }
      d += 1;
  }
   if(flag == true){
       outputObj.innerHTML="yes";
   }
   else{
    outputObj.innerHTML="no";
   }

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
 // document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
