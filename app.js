const primero = document.getElementById("primero");
const segundo = document.getElementById("segundo");
const tercero = document.getElementById("tercero");
const cuarto = document.getElementById("cuarto");
let timer=20;
function uno(){
    let a=0;
    let time = setInterval(function(){
        a++
        if(a===84){
            clearInterval(time);
        }
        primero.innerHTML=a;
    }, timer);
}
function dos(){
    let a=0;
    let time = setInterval(function(){
        a++
        if(a===67){
            clearInterval(time);
        }
        segundo.innerHTML=a;
    }, timer);
}
function tres(){
    let a=0;
    let time = setInterval(function(){
        a++
        if(a===90){
            clearInterval(time);
        }
        tercero.innerHTML=a;
    }, timer);
}
function cuatro(){
    let a=0;
    let time = setInterval(function(){
        a++
        if(a===30){
            clearInterval(time);
        }
        cuarto.innerHTML=a;
    }, 70);
}
