// @ts-nocheck
var opName = document.getElementById("opName");
var get = document.getElementById("get");
let name = document.getElementById("name");
let audio = new Audio ("firework.mp3")

// Data
const names = [""]
const msg = ["Enter Your Name"]

get.onclick = function() {
    console.log("clicks")
    console.log(name.value);
    show();
    audio.play();
}

function show() {
    console.log("show")
    for(var i = 0; i < names.length; i++) {
        if(name.value.toLowerCase() == names[i]) {
            printMessage(i);
            return;
        }
    }
    opName.style.display = "block";
    opName.innerText = "Happy New Year! I hope all your dreams come true in 2023. Onwards and upwards!" ;
}

function printMessage(x) {
    console.log("print")
    opName.style.display = "block";
    opName.innerText = msg[x];
}
