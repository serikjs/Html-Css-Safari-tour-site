const menuBtn = document.querySelector('.menu__btn'),
	menu = document.querySelector('.menu__list')
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('open')
})
