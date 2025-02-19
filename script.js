// script.js
document.addEventListener("DOMContentLoaded", () => {
    const particleContainer = document.querySelector(".particles");
    const textElement = document.querySelector(".changing-text");
    const textArray = ["Web Developer", "Producer", "Coder"];
    let textIndex = 0;

    function changeText() {
        textElement.style.opacity = 0;
        textElement.style.transform = "translateX(100px)";
        setTimeout(() => {
            textElement.textContent = textArray[textIndex];
            textElement.style.opacity = 1;
            textElement.style.transform = "translateY(0)";
            textIndex = (textIndex + 1) % textArray.length;
        }, 500);
    }

    setInterval(changeText, 3000);

    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.backgroundColor = getRandomColor();
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    function getRandomColor() {
        const colors = ["#d9b0ff", "#bf7bff", "#867496", "#643d88"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(createParticle, 300);
    document.addEventListener("mousemove", (e) => {
        const cursor = document.querySelector(".custom-cursor");
        
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});
