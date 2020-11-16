var pcount = 0;
var ncount = 0;
function Problem7() {
    var num = parseInt(document.getElementById("input").value);
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