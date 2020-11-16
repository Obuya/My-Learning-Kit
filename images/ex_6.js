function Problem6() {
    var num = parseInt(document.getElementById("input").value);
    if (num > 0) {
        document.getElementById("output").innerHTML = "input is positive";
    }
    else if (num < 0) {
        document.getElementById("output").innerHTML = "input is negative";
    }
    else {
        document.getElementById("btn").disabled = true;
    }
}