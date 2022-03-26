const $reviewForm = $("#review_content_form")

$(".section_tab").on("click", function(){
	$(this).next().show('slow')
	$(".section_outer").not($(this).next()).hide('slow')
	$(".section_tab").not(($(this))).removeClass("section_tab-open")
	$(this).addClass("section_tab-open")
})

$reviewForm.hide()
$("#review_form_open-btn").on("click", function(){
	$reviewForm.slideDown()
})
$("#review_form_close-btn").on("click", function(){
	$reviewForm.slideUp()
})
$reviewForm.on("submit", function(e){
	e.preventDefault()
	$reviewForm.slideUp()
})