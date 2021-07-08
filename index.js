const body = document.querySelector("body")
const hamburgerBtn = document.querySelector(".hamburger-btn")
const hamburgerBtnClose = document.querySelector(".hamburger-btn-close")
const menu = document.querySelector(".menu")
const menuBackground = document.querySelector(".menu-mobile-background")
const avatarArr = document.querySelectorAll(".avatar")
const imgModalWrapper = document.querySelector(".img-modal-wrapper")
const imgModalImg = document.querySelector(".img-modal img")
const closeImgModal = document.querySelector(".close-img-modal")
const main = document.querySelector(".main")

document.addEventListener("keydown", function (event) {
	if (event.ctrlKey && (event.key === "x" || event.key === "X")) {
		if (!menu.classList.contains("menu-mobile-open")) openMenu()
		else closeMenu()
		event.preventDefault() //for what
	}
})

imgModalImg.onclick = (e) => e.stopPropagation()
imgModalWrapper.onclick = () => (imgModalWrapper.style.display = "none")
const displayModal = (event) => {
	const img = imgModalWrapper.firstElementChild.firstElementChild
	img.src = event.target.src
	closeImgModal.addEventListener(
		"click",
		() => (imgModalWrapper.style.display = "none")
	)
	return (imgModalWrapper.style.display = "grid")
}

avatarArr.forEach((element) => element.addEventListener("click", displayModal))
const openMenu = () => {
	body.style.overflow = "hidden"
	body.style.marginRight = "17px"
	menuBackground.style.display = "block"
	menu.classList.toggle("menu-mobile-open")
}
const closeMenu = () => {
	body.style.overflow = "initial"
	body.style.marginRight = 0
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
