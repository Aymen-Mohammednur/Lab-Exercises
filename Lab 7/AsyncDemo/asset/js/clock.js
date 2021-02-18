const hourDiv = document.querySelector('.hour');
const minuteDiv = document.querySelector('.minute');
const secondDiv = document.querySelector('.seconds');

setInterval(setClock, 1000);

function setClock() {
    const myDate = new Date();

    const seconds = myDate.getSeconds();
    const secRot = ((seconds / 60) * 360) + 90;  // 60 because it turns 6 deg per min
    secondDiv.style.transform = `rotate(${secRot}deg)`

    const minutes = myDate.getMinutes();
    const minRot = ((minutes / 60) * 360) + 90;
    minuteDiv.style.transform = `rotate(${minRot}deg)`

    const hours = myDate.getHours();
    const houRot = ((hours / 30) * 360) + 90; // 30 because it turns 360 deg in 12 hours so 360/12 is 30
    hourDiv.style.transform = `rotate(${houRot}deg)`

}

setClock();