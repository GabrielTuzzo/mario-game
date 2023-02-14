const mario = document.querySelector('.mario');

document.addEventListener("keydown", function jump (e) {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
})  

const loop = setInterval(() => {
    
const pipePosition = document.querySelector('.pipe').offsetLeft
console.log(pipePosition)


}, 10)