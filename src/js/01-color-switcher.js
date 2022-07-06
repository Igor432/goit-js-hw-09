function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBut = document.querySelector('[data-start]');
const stopBut = document.querySelector('[data-stop]');
let colorInterval = null;

const onClick = () => {
    colorInterval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startBut.disabled = true;
};

const onStop = () => {
    body.style.backgroundColor = 'white';
    clearInterval(colorInterval);
    startBut.disabled = false;
}

startBut.addEventListener('click', onClick);
stopBut.addEventListener('click', onStop);





