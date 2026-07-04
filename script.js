const messages=[
"👋 Sunte Ho...",
"❤️ Are Suno To Sahi...",
"💌 Ek Baat Batani Thi...",
"😔 I Miss you Very Badly...",
"🧸 I Need Tight A Hug...",
"❤️ And Lasty I love You So Much..."
];

let current=0;

function openGift(){

document.getElementById("giftBox").style.display="none";

document.getElementById("messageBox").style.display="block";

typeWriter(messages[current]);

createHearts();

}

function nextText(){

current++;

if(current<messages.length){

typeWriter(messages[current]);

}

if(current==4){

document.getElementById("teddy").style.display="block";

}

if(current>=messages.length-1){

document.getElementById("nextBtn").style.display="none";

}

}

function typeWriter(text){

let i=0;

const target=document.getElementById("typing");

target.innerHTML="";

document.getElementById("nextBtn").style.display="none";

const timer=setInterval(()=>{

target.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

document.getElementById("nextBtn").style.display="inline-block";

}

},70);

}
