window.addEventListener('load', () => {
  const pads = document.querySelectorAll('.selam div')
  const sound = document.querySelectorAll('audio')
  const visual = document.querySelector('.visual')
  const colors = [
    '#889',
    '#ff0',
    '#f55',
    '#892381',
    '#4f49f2',
    '#5b0',
    '#00f040',
    '#46f',
    '#ff50bb',
    '#03e1f0',
    '#a0f304',
    '#9800f3',
  ]

  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      sound[index].currentTime = 0
      sound[index].play()
    })

    pad.addEventListener('click', () => {
      var bubble = document.createElement('div')
      visual.appendChild(bubble)
      bubble.style.backgroundColor = colors[index]
      bubble.style.animation = 'jump 1.8s ease'

      bubble.addEventListener('animationend', function () {
        visual.removeChild(this)
      })
    })
  })
})
