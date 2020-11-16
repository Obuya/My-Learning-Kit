// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function mapping() {
   //precondition: 
   //	num1 is a real number

   //Postcondition:
   //	one of these letter grades is outputted (A+,A,B,B,C+,C,D+,D,E,F)                               


   /* in Ex1, change the following two lines such that 
      num1 and num2 are parsed to integer before be 
      assigned to w and h, respectively.                   */
   /* in Ex 2, rename w and h to a and b, respectively.    */

   var grade = parseInt(document.getElementById("num1").value);
   /* in Ex2, write a similar code to the above line
      to capture the value for c*/


   /* in Ex2 to Ex4, you need to replace the following line 
       with some other formulas */



   /* in Ex5, you should delete from Line 15 to this line */

   //in Ex 5, uncomment this block
   var letter;
   switch (true){
    case (grade>89): 
       letter="A+";
       break;
    case (grade>79): 
       letter="A";
       break;
    case (grade>74): 
       letter="B+";
       break;
    case (grade>69): 
       letter="B";
       break;
    case (grade>64): 
       letter="C+";
       break;
    case (grade>59): 
       letter="C";
       break;
    case (grade>54): 
       letter="D+";
       break;
    case (grade>49): 
       letter="D";
       break;
    case (grade > 39):
       letter = "E";
       break;
       // in Ex5, you need to add more cases for other letter grades
    default:
       letter="F";
   }


   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */
   document.getElementById("output").innerHTML = letter;
}
var pcount = 0;
var ncount = 0;
function Problem7() {
    var num = parseInt(document.getElementById("num1").value);
    if (num > 0) {
        document.getElementById("output").innerHTML = "input is positive";
        pcount++;
    }
    else if (num < 0) {
        document.getElementById("output").innerHTML = "input is negative";
        ncount++;
    }
    else {
        document.getElementById("btn").disabled = true;
        document.getElementById("output").innerHTML ="<br> postive:" + pcount +"<br> negative:"+ncount;
        pcount = 0;
        ncount = 0;
    }
}