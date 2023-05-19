const horas = document.getElementsById('horas');
const minutos = document.getElementsById('minutos');
const segundos = document.getElementsById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMin();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    min.textContent = min;
    segundos.textContent = s;
})