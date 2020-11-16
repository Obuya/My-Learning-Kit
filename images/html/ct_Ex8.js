// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
var count = 0;
function divisible() {
   //precondition: 
   //	num1 is a real number

   //Postcondition:
   //	a "yes" is outputted if num1 is divisible by 6 otherwise a "no" is outputted if num1 is not 0, when num1 is 0 the count of numbers previous entered that where divisble by 6 is outputted.                             


   /* in Ex1, change the following two lines such that 
      num1 and num2 are parsed to integer before be 
      assigned to w and h, respectively.                   */
   /* in Ex 2, rename w and h to a and b, respectively.    */

   var number = parseInt(document.getElementById("num1").value);
   /* in Ex2, write a similar code to the above line
      to capture the value for c*/


   /* in Ex2 to Ex4, you need to replace the following line 
       with some other formulas */
       var divBy6 = "";

    if(number == 0){

        document.getElementById("divBy6").innerHTML = count;
        document.getElementById("ex_8").style.display = "inline";
        count = 0;

    }  
    else if(number % 2 == 0 && number % 3 == 0){

        count = count + 1;
        
        divBy6 = "YES";
    } 
    else{
        divBy6 = "NO";
    }
   /* in Ex5, you should delete from Line 15 to this line */

   //in Ex 5, uncomment this block
   


   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */
   document.getElementById("output").innerHTML = divBy6;
}