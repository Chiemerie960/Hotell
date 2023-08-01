'use stirct'

const burger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const nav = document.querySelector('.hidden-nav')

burger.addEventListener('click', ()=> {
  nav.classList.add('open')
})
close.addEventListener('click', ()=> {
  nav.classList.remove('open')
})