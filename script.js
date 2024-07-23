function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const textElement = document.querySelector('.text');
    textElement.style.color = getRandomColor();
}

setInterval(changeColor, 500); // Change color every 500 milliseconds

document.body.addEventListener('click', function() {
    const audio = document.getElementById('audio');
    const horn = document.getElementById('horn');
    if (audio.paused) {
        audio.play();
        horn.play();
    }
});

// Optional: Handle touch events for mobile devices
document.body.addEventListener('touchstart', function() {
    const audio = document.getElementById('audio');
    const horn = document.getElementById('horn');
    if (audio.paused) {
        audio.play();
        horn.play();
    }
}, { once: true });