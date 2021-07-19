// const root = document.querySelector("root")[0]
const body = document.querySelector("body")
const hamburgerBtn = document.querySelector(".menu__hamburger-btn")
const hamburgerBtnClose = document.querySelector(".menu__close-btn")
const menu = document.querySelector(".menu")
const menuBackground = document.querySelector(".menu__mobile__background")
const avatarArr = document.querySelectorAll(".card__avatar")
const imgModalWrapper = document.querySelector(".img-modal__wrapper")
const imgModalImg = document.querySelector(".img-modal img")
const closeImgModal = document.querySelector(".img-modal__close")
const main = document.querySelector(".main")
const toggle = document.querySelector(".toggle > input")
const toggleDark = () => {
	if (toggle.checked === true) {
		body.classList.add("dark-theme")
	} else {
		body.classList.remove("dark-theme")
	}
}
toggle.onclick = toggleDark
document.addEventListener("keydown", function (event) {
	if (
		event.ctrlKey &&
		(event.key === "x" || event.key === "X") &&
		imgModalWrapper.style.display === "none"
	) {
		if (!menu.classList.contains("menu__mobile-open")) {
			openMenu()
		} else {
			closeMenu()
		}
	}

	if (event.key === "Escape" && !(imgModalWrapper.style.display === "none")) {
		return (imgModalWrapper.style.display = "none")
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
	menuBackground.style.display = "block"
	menu.classList.toggle("menu__mobile--open")
}
const closeMenu = () => {
	body.style.overflow = "initial"
	menuBackground.style.display = "none"
	return menu.classList.remove("menu__mobile--open")
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
