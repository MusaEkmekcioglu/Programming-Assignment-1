// function setNewWord() {
//   let word = prompt('word enter')
//   let symbol = prompt('enter symbol')
//   let again = +prompt('The number of repetitions')
//   let newword = ''
//   let result = ''
//   newword = word + symbol
//   result = newword.repeat(again)
//   return result.slice(0, result.length - 1)
// }

const btnsUp = document.querySelectorAll('.up')
const btnsDown = document.querySelectorAll('.down')
const divs = document.querySelectorAll('.box')
const numbers = document.querySelectorAll('.number')
let counter = 0
let update = []

btnsUp.forEach((btnUp) => {
  btnUp.addEventListener('click', (e) => {
    if (e.target.closest('div').parentElement.classList[1].includes('5')) {
      counter = 5
    } else {
      if (e.target.closest('div').parentElement.classList.contains('active')) {
        e.target
          .closest('div')
          .parentElement.firstElementChild.classList.add('hidden')
        e.target.closest('div').parentElement.classList.remove('active')
        counter = +e.target.closest('div').parentElement.innerText.slice(-1) + 1

        divs.forEach((div) => {
          if (counter == div.innerText.slice(-1)) {
            div.firstElementChild.classList.remove('hidden')
            console.log(div)
            div.classList.add('active')
          }
        })
      }
    }
  })
})

btnsDown.forEach((btnDown) => {
  btnDown.addEventListener('click', (e) => {
    if (e.target.closest('div').parentElement.classList[1].includes('1')) {
      counter = 1
    } else {
      if (e.target.closest('div').parentElement.classList.contains('active')) {
        e.target
          .closest('div')
          .parentElement.firstElementChild.classList.add('hidden')
        e.target.closest('div').parentElement.classList.remove('active')

        counter = +e.target.closest('div').parentElement.innerText.slice(-1) - 1
        divs.forEach((div) => {
          if (counter == div.innerText.slice(-1)) {
            div.firstElementChild.classList.remove('hidden')
            div.classList.add('active')
          }
        })
      }
    }
  })
})

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    update.push(e.target.innerText)
    update.map((floor) => {
      divs.forEach((div) => {
        if (floor == div.innerText.slice(-1)) {
          div.firstElementChild.classList.remove('hidden')
          div.classList.add('active')
        } else {
          div.firstElementChild.classList.add('hidden')
          div.classList.remove('active')
        }
      })
    })
  })
})
