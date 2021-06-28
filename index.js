const hamburgerBtn = document.querySelector(".hamburgerBtn")
const menu = document.querySelector(".menu")

const openMenu = () => menu.classList.toggle("menuMobileOpen")

hamburgerBtn.addEventListener("click", openMenu)

window.addEventListener("resize", () => {
	if (window.innerWidth > 700) {
		return menu.classList.remove("menuMobileOpen")
	}
})
