const personagem = document.querySelector('.personagem')
const batom = document.querySelector('.batom')

const musicaFundo = new Audio('./audio/song.mp3')
const somPulo = new Audio('./audio/jump.mp3')
const somGameOver = new Audio('./audio/gameoverr.mp3')

musicaFundo.loop = true
musicaFundo.volume = 0.4

window.addEventListener('keydown', () => {
  if (musicaFundo.paused) {
    musicaFundo.play().catch(e => console.warn('Autoplay bloqueado.'))
  }
}, { once: true })

const jump = () => {
personagem.classList.add('jump')

somPulo.currentTime = 1
  somPulo.play()

setTimeout(() => {
   
    personagem.classList.remove('jump')

}, 500)

}

const loop = setInterval(() => {

    console.log('loop')

const batomPosition = batom.offsetLeft
const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '')

console.log(personagemPosition)

if (batomPosition <= 100 && batomPosition > 0 && personagemPosition < 70) {
   
    batom.style.animation = 'none'
    batom.style.left = `${batomPosition}px`

    personagem.style.animation = 'none'
    // personagem.style.bottom = `${personagemPosition}px`
    personagem.style.bottom = `250px`

    personagem.src = './img/gameoverpink.gif'
    personagem.style.width = '200px'
    personagem.style.marginLeft = '550px'

    
    musicaFundo.pause()
    somPulo.pause()
    somGameOver.play()

    clearInterval(loop)
}
 
}, 10)   
    
document;addEventListener('keydown', jump)