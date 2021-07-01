const body = document.querySelector("body")
const hamburgerBtn = document.querySelector(".hamburger-btn")
const hamburgerBtnClose = document.querySelector(".hamburger-btn-close")
const menu = document.querySelector(".menu")
const menuBackground = document.querySelector(".menu-mobile-background")
const avatarArr = document.querySelectorAll(".avatar")
const imgModal = document.querySelector(".img-modal")

const displayModal = (event) => {
	const img = imgModal.firstElementChild
	img.src = event.target.src
	imgModal.addEventListener("click", () => (imgModal.style.display = "none"))
	return (imgModal.style.display = "block")
}
avatarArr.forEach((element) => element.addEventListener("click", displayModal))

const openMenu = () => {
	menuBackground.style.display = "block"
	menu.classList.toggle("menu-mobile-open")
}
const closeMenu = () => {
	menuBackground.style.display = "none"
	return menu.classList.remove("menu-mobile-open")
}
hamburgerBtn.addEventListener("click", openMenu)
hamburgerBtnClose.addEventListener("click", closeMenu)
menuBackground.addEventListener("click", closeMenu)

window.addEventListener("resize", () => {
	if (window.innerWidth > 700) {
		menuBackground.style.display = "none"
		return menu.classList.remove("menu-mobile-open")
	}
})
