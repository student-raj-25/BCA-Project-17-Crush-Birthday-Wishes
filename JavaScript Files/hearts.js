setInterval(()=>{

let heart =
document.createElement("div");

heart.innerHTML="💝";


heart.style.position="fixed";
heart.style.left=
Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize="50px";

document.body.appendChild(heart);

let pos=100;

let move=setInterval(()=>{

pos--;

heart.style.top=pos+"vh";

if(pos<0){

heart.remove();
clearInterval(move);

}

},20);

},500);