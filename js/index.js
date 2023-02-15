const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

document.addEventListener("keydown", function jump (e) {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
})  

const loop = setInterval(() => {
    
const pipePosition = document.querySelector('.pipe').offsetLeft
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
console.log(marioPosition)


if (pipePosition <= 260 && pipePosition > 20 && marioPosition <= 50) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = 'imgs/mario-game-over.png'
    mario.style.width = '130px'
    mario.style.marginBottom = '100px'
    mario.style.marginLeft = '120px'

    clearInterval(loop)

}


}, 10)