const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.seconds');

function setClock() {
    const myDate = new Date();

    const seconds = myDate.getSeconds();
    const secondsDegree = (((seconds / 60) * 360) + 90);
    second.style.transform = `rotate(${secondsDegree}deg)`


    const minutes = myDate.getMinutes();
    const minutesDegree = (((minutes / 60) * 360) + 90);
    minute.style.transform = `rotate(${minutesDegree}deg)`


    const hours = myDate.getHours();
    const hoursDegree = (((hours / 60) * 360) + 90);
    hour.style.transform = `rotate(${hoursDegree}deg)`

}

setInterval(setClock, 1000);