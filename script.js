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
    const textElement = document.getElementById('text')
    const coords = document.getElementById('coords');
    const imageElement = document.getElementById('spinning-image');
    const druecken = document.getElementById('druecken');

    if (audio.paused) {
        audio.play();
        horn.play();
        if (textElement.classList.contains('hidden')) {
            textElement.classList.remove('hidden');
            coords.classList.remove('hidden');
            imageElement.classList.remove('hidden');
            imageElement.classList.add('spinning-image');
            druecken.classList.add('hidden');
        } else {
            textElement.classList.add('hidden');
            coords.classList.add('hidden');
            imageElement.classList.add('hidden');
        }
    }
});

// Optional: Handle touch events for mobile devices
document.body.addEventListener('touchstart', function() {
    const audio = document.getElementById('audio');
    const horn = document.getElementById('horn');
    const textElement = document.getElementById('text');
    const coords = document.getElementById('coords');
    const imageElement = document.getElementById('spinning-image');
    const druecken = document.getElementById('druecken');

    if (audio.paused) {
        audio.play();
        horn.play();
        if (textElement.classList.contains('hidden')) {
            textElement.classList.remove('hidden');
            coords.classList.remove('hidden');
            imageElement.classList.remove('hidden');
            imageElement.classList.add('spinning-image');
            druecken.classList.add('hidden');
        } else {
            textElement.classList.add('hidden');
            coords.classList.add('hidden')
            imageElement.add('hidden');
        }
    }
});
