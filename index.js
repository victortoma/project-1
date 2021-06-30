const body = document.querySelector("body")
const hamburgerBtn = document.querySelector("#hamburger-btn")
const menu = document.querySelector(".menu")
const avatarArr = document.querySelectorAll(".avatar")
const imgModal = document.querySelector(".img-modal")
const openMenu = () => menu.classList.toggle("menu-mobile-open")

const displayModal = (event) => {
	const img = imgModal.firstElementChild
	console.log(event.target.src)
	img.src = event.target.src
	imgModal.addEventListener("click", () => (imgModal.style.display = "none"))
	return (imgModal.style.display = "block")
}

avatarArr.forEach((element) => element.addEventListener("click", displayModal))
hamburgerBtn.addEventListener("click", openMenu)

window.addEventListener("resize", () => {
	if (window.innerWidth > 700) {
		return menu.classList.remove("menu-mobile-open")
	}
})
