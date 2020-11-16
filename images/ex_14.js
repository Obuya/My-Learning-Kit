// in Ex9 to Ex15, change the name of the following function properly
function fibonacci() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));
 
 
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/
  outputObj.innerHTML="number: "+a+"<br><br> Fibonacci: ";

  // translate rest of your flowcharts to js here:
  var count;
  var num1 = 0;
  var num2 = 1;

   for(count = 0; count < (a-2); count++){

        if(count == 0){
            outputObj.innerHTML += num1 + ", " + num2 + ", ";
        }
        var num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        outputObj.innerHTML += num3 + ", ";
   }

  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
