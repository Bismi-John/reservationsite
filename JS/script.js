// Author:Bismi John
function validate() {
    let x = document.getElementById("na").value;
    let y = document.getElementById("em").value;
    let place = document.getElementById("pls").value;
    let dat = document.getElementById("dt").value;
    let person = document.getElementById("per").value;
    let coupon = document.getElementById("cpn").value;
    let xreg = /^[a-zA-Z]{2,15}$/;

    let ereg =
        /^[a-zA-Z.!#$%&'*+/=?^_`{|}~-]+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let dreg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (x == "") {
        alert("name field is empty");
        return false;
    } else if (!xreg.test(x)) {
        alert("enter a valid name");
        return false;
    } else if (y == "") {
        alert("enter the email id");
        return false;
    } else if (!ereg.test(y)) {
        alert("You have entered an invalid email address!");
        return false;
    } else if (place === "") {
        alert("choose an option");
        return false;
    } else if (dat == "") {
        alert("Date cannot be empty");
        return false;
    } else if (!dreg.test(dat)) {
        alert("Invalid date format!");
        return false;
    } else if (person == "") {
        alert("enter the number of persons");
        return false;
    } else if (person < 0) {
        alert("enter valid number of persons");
        return false;
    } else if (isNaN(person)) {
        alert("please enter the number");
        return false;
    } else if (
        document.getElementById("ch1").checked === false &&
        document.getElementById("ch2").checked === false &&
        document.getElementById("ch3").checked === false
    ) {
        alert("choose atleast 1 option");
        return false;
    } else if (coupon == "") {
        alert("enter coupon code");
        return false;
    } else if (
        document.getElementById("radio").checked === false &&
        document.getElementById("radio").checked === false
    ) {
        alert("choose 1 option");
        return false;
    }
}
