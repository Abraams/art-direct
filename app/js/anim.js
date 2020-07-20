let offerAnim = anime.timeline({
	easing: "easeInOutCubic",
	duration: 1500,
});

document.addEventListener("DOMContentLoaded", () => {
	if (window.screen.width >= 1023) {
		if (document.querySelector(".offer .bg.type-1")) {
			anime({
				targets: ".bg #illustration-1-1",
				translateX: ["35px", "0"],
				translateY: ["-20px", "0"],
				opacity: ["0", "1"],
				duration: 1700,
				easing: "easeInOutCubic",
			});
			anime({
				targets: ".bg #illustration-1-2",
				translateX: ["-180px", "0"],
				translateY: ["30px", "0"],
				opacity: ["0", "1"],
				duration: 1500,
				delay: 350,
				easing: "easeInOutCubic",
			});
		} else if (document.querySelector(".offer .bg.type-2")) {
			anime({
				targets: ".bg #illustration-2-1",
				translateY: ["-50px", "0"],
				opacity: ["0", "1"],
				duration: 1700,
				easing: "easeInOutCubic",
			});
			anime({
				targets: ".bg #illustration-2-2",
				translateX: ["-200px", "0"],
				translateY: ["-30px", "0"],
				opacity: ["0", "1"],
				duration: 2000,
				delay: 350,
				easing: "easeInOutCubic",
			});
		}

		offerAnim
			.add(
				{
					targets: [".header__logo img"],
					scale: [0.95, 1],
					opacity: [0, 1],
					duration: 1000,
				},
				250
			)
			.add(
				{
					targets: ".nav__menu li",
					translateY: ["35%", "0"],
					opacity: [0, 1],
					duration: 650,
					delay: anime.stagger(150),
				},
				"-=800"
			)
			.add(
				{
					targets: ".nav__contacts .social__item img",
					scale: [0.8, 1],
					opacity: [0, 1],
					duration: 650,
					delay: anime.stagger(100),
				},
				"-=450"
			)
			.add(
				{
					targets: ".nav__contacts .contacts__item",
					opacity: [0, 1],
					duration: 500,
				},
				"-=450"
			)

			.add(
				{
					targets: ".offer__img",
					translateY: ["15px", "0"],
					opacity: ["0", "1"],
				},
				"-=1450"
			)
			.add(
				{
					targets: ".offer__heading h1",
					translateX: ["-200px", "0"],
					opacity: ["0", "1"],
				},
				"-=1400"
			)
			.add(
				{
					targets: ".offer__heading p",
					translateX: ["-210px", "0"],
					opacity: ["0", "1"],
				},
				"-=1450"
			)
			.add(
				{
					targets: ".offer__heading .offer__btn-wrap",
					translateX: ["-220px", "0"],
					opacity: ["0", "1"],
				},
				"-=1450"
			)
			.add(
				{
					targets: ".offer__heading .offer__btn-wrap span",
					opacity: ["0", "1"],
				},
				"-=1500"
			);
		//
		if (document.querySelector(".services .services__item")) {
			anime({
				targets: ".services .services__item",
				translateY: ["75px", 0],
				opacity: [0, 1],
				duration: 600,
				delay: anime.stagger(150, {
					start: 1300,
				}),
				easing: "easeInOutCubic",
			});
		}
		//
		if (document.querySelector(".reviews-more")) {
			anime({
				targets: ".reviews-more",
				translateY: ["75px", 0],
				opacity: [0, 1],
				duration: 1000,
				delay: 1200,
				easing: "easeInOutCubic",
			});
		}
		//
		if (document.querySelector(".advantages")) {
			anime({
				targets: ".advantages",
				translateY: ["25px", 0],
				opacity: [0, 1],
				duration: 1000,
				delay: 1200,
				easing: "easeInOutCubic",
			});
		}
		//
		if (document.querySelector(".portfolio-grid")) {
			anime({
				targets: ".portfolio-grid",
				translateY: ["25px", 0],
				opacity: [0, 1],
				duration: 1000,
				delay: 1200,
				easing: "easeInOutCubic",
			});
		}
		//
		if (document.querySelector(".services-more.design-card")) {
			anime({
				targets: ".services-more.design-card",
				translateY: ["75px", 0],
				opacity: [0, 1],
				duration: 800,
				delay: 1300,
				easing: "easeInOutCubic",
			});
			anime({
				targets: ".services-more.design-card .card-num",
				translateY: ["10px", 0],
				opacity: [0, 1],
				duration: 600,
				delay: 1700,
				easing: "easeInOutCubic",
			});
			anime({
				targets: ".services-more.design-card h2",
				translateY: ["10px", 0],
				opacity: [0, 1],
				duration: 600,
				delay: 1900,
				easing: "easeInOutCubic",
			});
			anime({
				targets: ".services-more.design-card .card__content",
				translateY: ["10px", 0],
				opacity: [0, 1],
				duration: 600,
				delay: 2100,
				easing: "easeInOutCubic",
			});
		}
	}
	if (window.screen.width <= 1023) {
		if (document.querySelector(".offer .bg.type-1")) {
			anime({
				targets: ".bg #illustration-1-1",
				translateX: ["150px", "0"],
				translateY: ["-20px", "0"],
				opacity: ["0", "1"],
				duration: 2000,
				easing: "easeInOutCubic",
			});
			anime({
				targets: ".bg #illustration-1-2",
				translateX: ["-180px", "0"],
				opacity: ["0", "1"],
				duration: 2000,
				delay: 300,
				easing: "easeInOutCubic",
			});
		} else if (document.querySelector(".offer .bg.type-2")) {
			anime({
				targets: ".bg #illustration-2-1",
				translateY: ["-50px", "0"],
				opacity: ["0", "1"],
				duration: 2000,
				easing: "easeInOutCubic",
			});
			anime({
				targets: ".bg #illustration-2-2",
				translateX: ["-80px", "0"],
				translateY: ["-20px", "0"],
				opacity: ["0", "1"],
				duration: 2000,
				delay: 350,
				easing: "easeInOutCubic",
			});
		}

		offerAnim
			.add({
				targets: ".bg #illustration-1",
				translateX: ["180px", "0"],
				translateY: ["-20px", "0"],
				opacity: ["0", "1"],
				duration: 1000,
				easing: "easeInOutCubic",
			})
			.add(
				{
					targets: [".header__logo img", ".offer__logo img"],
					scale: [0.95, 1],
					opacity: [0, 1],
					duration: 1000,
				},
				250
			)
			.add(
				{
					targets: ".header",
					opacity: ["0", "1"],
					easing: "easeInOutCubic",
					duration: 1000,
				},
				"-=500"
			)
			.add(
				{
					targets: ".bg #illustration-2",
					translateX: ["-180px", "0"],
					opacity: ["0", "1"],
					duration: 1000,
					easing: "easeInOutCubic",
				},
				"-=1000"
			)
			.add(
				{
					targets: ".offer__heading h1",
					translateY: ["20px", "0"],
					duration: 1000,
					opacity: ["0", "1"],
				},
				"-=850"
			)
			.add(
				{
					targets: ".offer__heading p",
					translateY: ["50px", "0"],
					duration: 1000,
					opacity: ["0", "1"],
				},
				"-=900"
			)
			.add(
				{
					targets: ".offer__heading .offer__btn-wrap",
					translateY: ["70px", "0"],
					duration: 1000,
					opacity: ["0", "1"],
				},
				"-=900"
			)
			.add(
				{
					targets: ".offer__heading .offer__btn-wrap span",
					duration: 1000,
					opacity: ["0", "1"],
				},
				"-=850"
			)
			.add(
				{
					targets: ".offer__img",
					translateY: ["90px", "0"],
					duration: 1000,
					opacity: ["0", "1"],
				},
				"-=900"
			);
	}
});
