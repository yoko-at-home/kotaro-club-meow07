const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const h1 = document.getElementById('h1')
const text = document.getElementById('text')
const body = document.getElementById('body')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', ()=> highlightCups(idx))
})

function highlightCups(idx) {
  if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 200}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
    h1.innerText = `✨ 目標達成 ✨`
    text.innerText = `✨ やったね ✨`
    text.classList.add('goal-achieved')
    h1.classList.add('goal-achieved')
    body.style.background = 'rgb(38, 96, 196)'
    body.style.color = 'white'

  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}
