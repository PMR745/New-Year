// @ts-nocheck
var opName = document.getElementById("opName");
var get = document.getElementById("get");
let name = document.getElementById("name");
let audio = new Audio ("firework.mp3")

// Data
const names = ["", "a", "prathamesh", "mandar", "mansi", "ajinkya", "prathmesh", "utkarsha", "anish", "ashman", "shrujani", "yash", "ronit"]
const msg = ["Enter Your Name", "Hope you like it the way i am using it for you", "Love Prgoramming ahh", "Don't focus on hole instead focus on your Goal", "Hope you achieve your Goal in 2023", "Focus! You need to focus on one thing. It is time to forget the past and celebrate a new start. Happy New Year Jinks!", "Try to sleep less and follow towards your goal", "Happy New Year Utk! Let's toast to yesterday's achievements and tomorrow's bright future.", "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", "Saale abhi toh bachpana chod Ashish daalne mei kya jaata hai! Hope you become more mature in the New Year. Happy New Year my Ashman!", "As the sun sets on another year, I wish you great company and good cheer. Happy New Year!", "May the closeness of your loved ones, family, and friends fill your heart with joy. Happy New Year!", "They say, If a man achieves victory over his body, who in the world can exercise power over him? He who rules himself rules over the whole world. So keep working hard and Accomlish your dreams in the comming New Year. Happy New Year Pesu!"];

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
    opName.innerText = "Happy New Year! I hope all your dreams come true in 2023. Onwards and upwards!";
}

function printMessage(x) {
    console.log("print")
    opName.style.display = "block";
    opName.innerText = msg[x];
}

window.onload = function() {
    audio.play();
}