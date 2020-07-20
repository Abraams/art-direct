function accordionHandler() {
	if (!document.querySelector("[data-accordion]")) return false;

	const faqItemHTML = document.querySelectorAll("[data-accordion]");

	function closeAccordion(item) {
		item.classList.add("--hidden");
	}

	function openAccordion(item) {
		item.classList.remove("--hidden");
	}

	faqItemHTML.forEach((elem) => {
		elem.addEventListener("click", () => {
			faqItemHTML.forEach((item) => {
				if (item !== elem) closeAccordion(item);
				else {
					setTimeout(() => {
						openAccordion(item);
					}, 700);
				}
			});
		});
	});
}
function rangeHandler() {
	if (!document.querySelector(".question__range")) return false;

	const rangeWrap = document.querySelector(".question__range");
	const range = rangeWrap.querySelector('input[type="range"]');
	const rangeCount = rangeWrap.querySelector("span.question__range-count");

	range.addEventListener("input", function () {
		rangeCount.textContent = this.value;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	if (document.querySelector("#portfolioSlider")) {
		$("#portfolioSlider").slick({
			infinite: false,
			dots: false,
			fade: true,
			speed: 1500,
			slidesToShow: 1,
			slidesToScroll: 1,
			useCSS: false,
			adaptiveHeight: true,
			useTransform: false,
			appendArrows: $(".slider__arrows"),
			prevArrow: `<button type="button" class="slick-prev _col">
							<img src='./img/icons/arrow.svg'>
						</button>`,
			nextArrow: `<button type="button" class="slick-next _col">
							<img src='./img/icons/arrow.svg'>
						</button>`,
		});

		$("#portfolioSlider").on("beforeChange", function (
			event,
			slick,
			currentSlide,
			nextSlide
		) {
			$(".slider__arrows").addClass("--hidden");
		});
		$("#portfolioSlider").on("afterChange", function (
			event,
			slick,
			currentSlide,
			nextSlide
		) {
			$(".slider__arrows").removeClass("--hidden");
		});
	}
	if (document.querySelector("#reviewsMore")) {
		$("#reviewsMore").slick({
			infinite: false,
			arrows: false,
			speed: 1000,
			slidersToShow: 1,
			slidesToscroll: 1,
			swipeToSlide: true,
			adaptiveHeight: false,
		});
	}
	$(document).ready(function () {
		$(".your-class").slick();
	});

	initMenu();
	accordionHandler();
	rangeHandler();

	lightbox.option({
		resizeDuration: 200,
		wrapAround: true,
		albumLabel: "",
		disableScrolling: true,
	});
});
