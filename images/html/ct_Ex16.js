// in Ex9 to Ex15, change the name of the following function properly
function count() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  
 
 
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/

  // translate rest of your flowcharts to js here:
  var pcount = 0;
  var ncount = 0;
  var i = 0;

   for(i = 1; i <= 200; i++){
    var a = parseInt(prompt("Please enter a number: ", ""));
    if(a < 0){
        ncount++;
    } 
    else if(a > 0){
        pcount++;
    }
   }
   outputObj.innerHTML="positive numbers: "+pcount+"<br>negative numbers:" + ncount;

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
