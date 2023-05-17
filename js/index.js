const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const text = document.querySelector('.text');
const content = document.querySelector('.content');

document.addEventListener("keydown", function jump () {
    mario.classList.add('jump')
    pipe.style.animation = 'pipe-animation 2s infinite ease-out'
    content.style.opacity = '1'
    text.innerHTML = ''

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 510)
})  
document.addEventListener("keydown", function jump2 () {
    mario.classList.add('jump2')

    setTimeout(() => {
        mario.classList.remove('jump2')
    }, 550)
})  
document.addEventListener("keydown", function jump3 () {
    mario.classList.add('jump3')

    setTimeout(() => {
        mario.classList.remove('jump3')
    }, 580)
})  
document.addEventListener("keydown", function jump4 () {
    mario.classList.add('jump4')

    setTimeout(() => {
        mario.classList.remove('jump4')
    }, 620)
})  
document.addEventListener("keydown", function jump5 () {
    mario.classList.add('jump5')
    pipe.style.animation = 'pipe-animation 1.5s infinite ease-out'
    setTimeout(() => {
        mario.classList.remove('jump5')
    }, 680)
})  
document.addEventListener("keydown", function jump6 () {
    mario.classList.add('jump6')
    pipe.style.animation = 'pipe-animation 1.5s infinite ease-out'
    setTimeout(() => {
        mario.classList.remove('jump6')
    }, 750)
})  
document.addEventListener("keydown", function jump7 () {
    mario.classList.add('jump7')
    pipe.style.animation = 'pipe-animation 1.5s infinite ease-out'
    setTimeout(() => {
        mario.classList.remove('jump7')
    }, 1000)
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
    text.innerHTML = 'Oops!'
    text.style.weight = 'bold'
    text.style.fontSize = '100px'
    


    clearInterval(loop)

    setTimeout(() => {
        location.reload()
    }, 300)
}}, 10)


