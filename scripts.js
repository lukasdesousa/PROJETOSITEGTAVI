let botao = document.querySelector('.botao')
let dentro = document.querySelector('.aside')


botao.addEventListener('click', aparece)
dentro.style.display = 'none'


function aparece() {
    
    if (dentro.style.display === 'none') {
        dentro.style.display = 'block'
        botao.style.background = 'black'
        
    } else if (dentro.style.display === 'block') { 
        dentro.style.display = 'none'
        botao.style.background = '#3e45ab'

    } else {
        
    }
        
}
    
