const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 60; i++) {

    hearts.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 8,
        speed: Math.random() * 2 + 1

    });

}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(250, 48, 139, 0.94)";

    hearts.forEach(h => {

        ctx.beginPath();
        ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
        ctx.fill();

        h.y -= h.speed;

        if (h.y < 0) {

            h.y = canvas.height;
            h.x = Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(draw);

}

draw();

window.onresize = () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}