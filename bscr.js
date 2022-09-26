// Animacion de las ventanas
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    
    let ripples = document.createElement('span')
    ripples.style.left = x + 'px'
    ripples.style.top = y + 'px'
    this.appendChild(ripples)
    
    window.setTimeout(() => {
      ripples.remove()
    }, 500)
  })
})



// Animacion del fondo