const span = document.querySelector('span')
const comecar = document.querySelector('.comecar')
const parar = document.querySelector('.parar')
const resetar = document.querySelector('.resetar')
let contador = 0;
let intervalo;
// Comecar
comecar.addEventListener('click', (e)=>{
    e.preventDefault()
    intervalo = setInterval(function(){
        contador++
        span.innerText = contador;
    },1000)
})
// Parar
parar.addEventListener('click', (e)=>{
    e.preventDefault()
    clearInterval(intervalo)
    span.innerText = contador;
})

resetar.addEventListener('click', (e)=>{
    e.preventDefault()
    contador = 0;
    span.innerText = contador;
    clearInterval(intervalo)
})
