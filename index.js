const body = document.querySelector("body")
const hamburgerBtn = document.querySelector(".hamburger-btn")
const hamburgerBtnClose = document.querySelector(".hamburger-btn-close")
const menu = document.querySelector(".menu")
const menuBackground = document.querySelector(".menu-mobile-background")
const avatarArr = document.querySelectorAll(".avatar")
const imgModal = document.querySelector(".img-modal")
const closeImgModal = document.querySelector(".close-img-modal")
const main = document.querySelector(".main")

const displayModal = (event) => {
	const img = imgModal.firstElementChild
	img.src = event.target.src
	closeImgModal.addEventListener(
		"click",
		() => (imgModal.style.display = "none")
	)
	return (imgModal.style.display = "flex")
}
avatarArr.forEach((element) => element.addEventListener("click", displayModal))

const openMenu = () => {
	body.style.overflow = "hidden"
	menuBackground.style.display = "block"
	menu.classList.toggle("menu-mobile-open")
}
const closeMenu = () => {
	body.style.overflow = "initial"
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
