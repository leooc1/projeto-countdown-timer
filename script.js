//variável do dia
var d = 13;
//variável da hora
var h = 19;
//variável do minuto
var m = 0;

var timeReset=setInterval(()=>{
    let dataFuture = new Date();
    let mes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let dataCurrent = new Date(`${mes[dataFuture.getMonth()]} ${d} 2023 ${h}:${m}:00`);

    countdown(dataFuture,dataCurrent)
})

function countdown(future, current){

    let difference = current - future;

    let day = document.querySelector('#day')
    let hrs = document.querySelector('#hrs')
    let min = document.querySelector('#min')
    let seg = document.querySelector('#seg')

    day.innerText = Math.floor(difference / 1000 / 60 / 60 /24)
    hrs.innerText = Math.floor(difference / 1000 / 60 / 60 ) % 24
    min.innerText = Math.floor(difference / 1000 / 60 ) % 60
    seg.innerText = Math.floor(difference / 1000 ) % 60

    day.innerText = day.innerText < 10 ? "0" + day.innerText : day.innerText 
    hrs.innerText = hrs.innerText < 10 ? "0" + hrs.innerText : hrs.innerText 
    min.innerText = min.innerText < 10 ? "0" + min.innerText : min.innerText 
    seg.innerText = seg.innerText < 10 ? "0" + seg.innerText : seg.innerText 
}

function tradeDay(){
    d = window.prompt("Digite um dia para a contagem regressiva:")
}

function tradeHour(){
    h = window.prompt("Digite a hora para a contagem regressiva:")
}

function tradeMinutes(){
    m = window.prompt("Digite o minuto para a contagem regressiva:")
}