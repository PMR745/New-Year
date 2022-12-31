// @ts-nocheck
var opName = document.getElementById("opName");
var get = document.getElementById("get");
let name = document.getElementById("name");
let audio = new Audio ("firework.mp3")

// Data
const names = ["", "a", "prathamesh", "mandar", "mansi", "ajinkya", "prathmesh", "utkarsha", "anish", "ashman", "shrujani", "yash", "ronit", "aarya", "aayush", "mrunmayee", "omkar", "manav", "vinay", "vaidehi", "vedant", "aditi", "ashish", "pragati", "varsha", "rohit", "sakshi", "sai", "rohan", "sagar", "kirtesh", "rupali", "priyanshu", "shubham", "sahil", "annie", "karishma", "sanket"]

const msg = ["Enter Your Name", "Hope you like it the way i am using it for you", "Love Prgoramming ahh", "Don't focus on hole instead focus on your Goal, Hope you get closer to your goal. Happy New Year Mandy!", "I think you had a fantastic last year both academic and non academic so maitain that in the coming new year too. Happy New Year Mansi!", "Focus! You need to focus on one thing. It is time to forget the past and celebrate a new start. Happy New Year Jinks!", "Try to sleep less and follow towards your goal try to be consistent like a semicolon(;) in C++. Happy New Year Prathmesh", "Happy New Year Utk! Let's toast to yesterday's achievements and tomorrow's bright future.", "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world. Happy New Year Anish!", "Saale abhi toh bachpana chod Ashish daalne mei kya jaata hai! Hope you become more mature in the New Year. Happy New Year my Ashman!", "As the sun sets on another year, I wish you great company and good cheer. Happy New Year!", "May the closeness of your loved ones, family, and friends fill your heart with joy. Happy New Year!", "They say, If a man achieves victory over his body, who in the world can exercise power over him? He who rules himself rules over the whole world. So keep working hard and Accomlish your dreams in the comming New Year. Happy New Year Pesu!", "Each year is a gift that holds hope for new adventures. May your New Year be filled with exploration, discovery, and growth. Happy New Year!", "Set your life on fire. Seek those who fan your flames. Happy New Year Buddy!", "In the New Year, never forget to thank your past years because they enabled you to reach today! Without the stairs of the past, you cannot arrive at the future! Happy New Year Penguin", "Happy New Year! I hope next year brings us more wonderful opportunities to spend time together. Happy New Year Omkar!", "Do not wait until the conditions are perfect to begin. Beginning makes the conditions perfect. Happy New Year Manav! Siuuuu", "Hope you study late nights in the coming New Year like you did at the end of last year! Happy New Year Vinay!", "Year’s end is neither an end nor a beginning but a going on, with all the wisdom that experience can instill in us. Happy New Year Vaidehi!", "Do not wait until the conditions are perfect to begin. Beginning makes the conditions perfect. Begin New Year with a step closer to Your Dream. Happy New Year Vedant!", "Hope this new year is filled with possibilities for you, so dream big and believe in yourself this year. Wish you a peaceful New Year 2023! Don't forget to enjoy your New Year Aditi!", "One day you will wake up and there won't be any more time to do the things you've always wanted. Do it now. Happy New Year Ashu!", "Tomorrow is the first blank page of a 365-page book. Write a good one not by sleeping. Happy New Year Pragati!", "Welcoming a new year is not only about counting the last moments, it’s about being ready for every moment of the next year. Happy New Year Varsha!", "Wishing you a very Happy New Year, filled with the richness and diversity of Indian culture. Happy New Year Rohit!", "May the new year bring you the blessings of the gods, and may they guide you on your journey. Happy New Year Sakshi!", "The first step towards getting somewhere is to decide you’re not going to stay where you are. Happy New Year Sai!", "I wish you a year full of adventure, exploration, and new experiences. Happy New Year Rohan!", "I hope the coming year brings you new friendships, new experiences, and new opportunities to learn and grow. Happy New Year Sagar!", "I hope this new year brings you good health, joy, and lots of love. You are an inspiration to me and I am so grateful to have you in my life. You are the Guide for my ship of Enjoyment. Happy New Year Kirtesh!", "I wish you a lifetime of love, happiness, and prosperity. May this new year bring you all the joy and fulfillment your hearts desire. Congratulation on your Engagement and Happy New Year Rupali Didi!", "Tereko kyu wish karu chutiye. Tere jaisi shayari thodi likhne aati hai mujhe. Phir bhi try kar hu: Naye saal ki hai yeh aai shuruaat,Sang ho khushiyan apne saath,Naye saal ki hai yeh aai shuruaat,Sabko mile pyaar aur saath. Happy New Year Havle!", "I wish you a year full of adventure, exploration, and new experiences. Happy New Year Shubham!", "May the new year bring you happiness, prosperity, and good fortune in all things. Don't loose hope if your crush has a boyfriend maybe new year break some relations for your relation. Happy New Year Sahil!", "Life isn't about finding yourself. Life is about creating yourself. And you have definetely took a step in that direction last year continue that in new year too. Happy New Year Annie!", "Life isn't about finding yourself. Life is about creating yourself. And you have definetely took a step in that direction last year continue that in new year too. Happy New Year Annie!", "Happy New Year Topper! Keep your top position in the New Year too and Enjoy your topper's Journey!"];

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
