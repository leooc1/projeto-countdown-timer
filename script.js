//variável do dia
var d = 13;
//variável da hora
var h = 19;
//variável do minuto
var m = 0;

var timeReset=setInterval(()=>{
    let data = new Date();

    let day = data.getDate();
    let hrs = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    countdown(day, hrs, min, seg)
})

function countdown(dia, hora, minutos, segundos){
    var soonDay = d;
    var soonHours = h;
    var soonMinutes = m;
    var soonSeconds = 0;

    soonMinutes += 60;
    soonSeconds += 60;

    dia = soonDay - dia;
    if(dia<0) dia *= -1
    if(dia>0 && hora>=soonHours && hora<24){
        dia -= 1 
        hora = soonHours - hora;
        if(hora<0) hora *= -1
        hora = 24 - hora - 1
    }
    else{
        hora = soonHours - hora +1;
        if(hora<0) hora *= -1
    }
    minutos = soonMinutes - minutos - 1;
    if(minutos<0) minutos *= -1
    if(minutos>=60){
        minutos-=60
    }
    else if(minutos<0){
        minutos *= -1
    } 
    segundos = soonSeconds - segundos;
    if(segundos<0) segundos *= -1
    if(segundos>=60){
        segundos-=60
    }
    else if(segundos<0){
        segundos *= -1
    } 
    
    if(dia<10) dia = "0"+dia 
    if(hora<10) hora = "0"+ (hora-1)
    if(minutos<10) minutos = "0"+ (minutos)
    if(segundos<10) segundos = "0"+segundos
    if(segundos==60) segundos = "00"

    if(dia=="00" && hora=="00" && minutos=="00" && segundos=="01"){
        clearInterval(timeReset)
        setTimeout(()=>{
            document.querySelector('#day').innerHTML = "00"
            document.querySelector('#hrs').innerHTML = "00"
            document.querySelector('#min').innerHTML = "00"
            document.querySelector('#seg').innerHTML = "00"
        },1000)
    }
    
    document.querySelector('#day').innerHTML = dia
    document.querySelector('#hrs').innerHTML = hora
    document.querySelector('#min').innerHTML = minutos
    document.querySelector('#seg').innerHTML = segundos
}

function tradeDay(){
    d = Number(window.prompt("Dia para contagem regressiva: "))
}

function tradeHour(){
    h = Number(window.prompt("Hora para contagem regressiva: "))
}

function tradeMinutes(){
    m = Number(window.prompt("Minuto para contagem regressiva: "))
}