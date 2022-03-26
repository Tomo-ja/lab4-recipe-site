const slides = document.getElementsByClassName("slider_slide")
const navLinks = document.getElementsByClassName("slider_nav_item")
const prevBtn = document.getElementById("slider_btn_prev")
const nextBtn = document.getElementById("slider_btn_next")
let currentSlide = 0

function changeSlide(nextPage){
	if (nextPage == slides.length ){
		nextPage = 0
	}else if(nextPage < 0){
		nextPage = slides.length - 1
	}
	
	slides[currentSlide].classList.remove("slider_slide-active")
	slides[nextPage].classList.add("slider_slide-active")
	navLinks[currentSlide].classList.remove("slider_nav_item-active")
	navLinks[nextPage].classList.add("slider_nav_item-active")

	currentSlide = nextPage
}

prevBtn.addEventListener("click", ()=>{
	let page = currentSlide -1
	changeSlide(page)
})
nextBtn.addEventListener("click", ()=>{
	let page = currentSlide + 1
	changeSlide(page)
})
