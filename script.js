// @ts-nocheck
var opName = document.getElementById("opName");
var get = document.getElementById("get");
let name = document.getElementById("name");

// Data
const names = ["a", "prathamesh", "mandar", "mansi", "ajinkya", "prathmesh"]
const msg = ["Hope you like it the way i am using it for you", "Love Prgoramming ahh", "Don't focus on hole instead focus on your Goal", "Hope you achieve your Goal in 2023", "Focus! You need to focus on one thing", "Try to sleep less and follow towards your goal"];

get.onclick = function() {
    console.log("clicks")
    console.log(name.value);
    show();
}

function show() {
    console.log("show")
    for(var i = 0; i < names.length; i++) {
        if(name.value.toLowerCase() == names[i]) {
            printMessage(i);
        }
    }
}

function printMessage(x) {
    console.log("print")
    opName.style.display = "block";
    opName.innerText = msg[x];
}