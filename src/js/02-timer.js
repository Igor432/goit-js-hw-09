import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('#datetime-picker');
const startBut = document.querySelector('button');
var daysCount = document.querySelector('[data-days]')
var hoursCount = document.querySelector('[data-hours]')
var minutesCount = document.querySelector('[data-minutes]')
var secondsCount = document.querySelector('[data-seconds]')
const timerDiv = document.querySelector('.timer')
const timer = timerDiv.children;


timerDiv.style.display = 'flex';

daysCount.style.textAlign = 'center';
hoursCount.style.textAlign = 'center';
minutesCount.style.textAlign = 'center';
secondsCount.style.textAlign = 'center'

for (var i = 0; i < timer.length; i += 1) {
    timer[i].style.display = 'grid'
    timer[i].style.margin = '20px 10px 0px 10px'
    timer[i].style.border = '1px black solid'
    timer[i].style.padding = '10px 10px 10px 10px'
}


startBut.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0])
    },

};

const instance = flatpickr(inputDate, { options });

inputDate.addEventListener('input', () => {
    const chosenDate = instance.selectedDates[0]
    console.log(chosenDate);

    if (chosenDate < new Date()) {
        window.alert('fuck you');
    } else {
        startBut.disabled = false;
        startBut.addEventListener('click', () => {
            const setCount = setInterval(() => {
                startBut.disabled = true;
                const difference = chosenDate - new Date();
                convertMs(difference);
            }, 1000)
        })

    }
})

/* time count */

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    daysCount.innerHTML = days;
    hoursCount.innerHTML = hours;
    minutesCount.innerHTML = minutes
    secondsCount.innerHTML = seconds;

}







