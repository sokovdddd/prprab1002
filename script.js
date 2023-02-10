const ul = document.querySelector('#elem')

ul.firstElementChild.style.color = 'red'

ul.lastElementChild.style.color = 'red'

for(let i of ul.children){
    i.append('!')
}

const el = document.querySelector('#elem2')
el.parentElement.style.border = '2px solid red'

console.log(el.closest('div'))

const el3 = document.querySelector('#elem3')
console.log(el3.closest('.www'))

el.previousElementSibling.append('!')

el.nextElementSibling.append('!')

el.nextElementSibling.nextElementSibling.append('!') // так можно было?

const el4 = document.querySelector('#elem4')   
let elp = el4.previousElementSibling.textContent  
let eln = el4.nextElementSibling.textContent
el4.previousElementSibling.textContent = eln
el4.nextElementSibling.textContent = elp

