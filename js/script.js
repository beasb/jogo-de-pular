const personagem = document.querySelector('.personagem')
const batom = document.querySelector('.batom')


const jump = () => {
personagem.classList.add('jump')

setTimeout(() => {
   
    personagem.classList.remove('jump')

}, 500)

}

const loop = setInterval(() => {

const batomPosition = batom.offsetLeft
const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '')

console.log(personagemPosition)

if (batomPosition <= 100 && batomPosition > 0 && personagemPosition < 70) {
    batom.style.animation = 'none'
    batom.style.left = `${batomPosition}px`
}
 
}, 10)   
    
document;addEventListener('keydown', jump)