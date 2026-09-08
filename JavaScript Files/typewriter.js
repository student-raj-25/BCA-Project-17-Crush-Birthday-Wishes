const text =
    " The Message I'll Never Send... 🤍 Sabse pehle... mujhe maaf kar dena ki mujhe tumse pyaar ho gaya.❣ Mujhe pata hai...💖 ab tum kabhi meri nahi hogi.💘 Aur maine is baat ko accept bhi kar liya hai.💗 Isliye ab main tumse wahi pyaar karunga jo mujhe aata hai...💞 khamoshi se... door rehkar.💓 Tumse milna hi kaafi tha mujhe yeh samjhane ke liye ki sachcha pyaar sirf paane ka naam nahi hota....💛 Aur aak tarfa pyaar bhi sachcha pyaar ho sakta hai...💕 Shayad yeh message hamesha unsent hi rahe...💝 Lekin ek baat hamesha sach rahegi...💟 YOU ARE MY FIRST AND LAST ONE SIDED LOVE.👀🎀💓";


let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing")
            .innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 50);

    }

}

typing();