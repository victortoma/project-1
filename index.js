const hamburgerBtn = document.querySelector("#hamburger-btn")
const menu = document.querySelector(".menu")

const openMenu = () => menu.classList.toggle("menu-mobile-open")

hamburgerBtn.addEventListener("click", openMenu)

window.addEventListener("resize", () => {
	if (window.innerWidth > 700) {
		return menu.classList.remove("menu-mobile-open")
	}
})
