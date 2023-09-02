const imagen = document.getElementById('imagen');
const audio = document.getElementById('audio');

let clicActual = 0;
const imagenes = ['image/sffvs-removebg-preview (1).png', 'image/efcsdc-removebg-preview (3).png'];

imagen.addEventListener('click', () => {
    clicActual = (clicActual + 1) % imagenes.length;
    imagen.src = imagenes[clicActual];

    if (clicActual === 1) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});

// Agregar controles de reproducción de audio
const audioControls = document.getElementById('audio-controls');
audioControls.innerHTML = `
    <button onclick="audio.play()">Play</button>
    <button onclick="audio.pause(); audio.currentTime = 0;">Stop</button>
`;
