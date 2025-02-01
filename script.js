const button = document.getElementById("send");
const daynight = document.getElementById("daynight");
const body = document.querySelector("body");

daynight.addEventListener('click', ()=>{
    if (body.classList.toggle('dark-mode')){
        daynight.textContent = '🌙'
    }else{
        daynight.textContent = '🔆'
    }
});

function lupa(){
    let lopa = prompt('                                               МАГАЗИН \n 1: Маторня масла \n 2: Спартивня калисо \n 3: Палирофка')
}

function luka(){
    let lola = prompt('                                                ПОЙСК')
}