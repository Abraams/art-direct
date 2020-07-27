class HeaderBar {
	constructor(
		elem = document.querySelector(`#Header`),
		toggler = elem.querySelector(`#HeaderToggler`),
		fixed = false,
		mobile = false,
		open = false
	) {
		this.elem = elem;
		this.toggler = toggler;
		this.fixed = fixed;
		this.mobile = mobile;
		this.open = open;
	}

	fix() {
		if (!this.mobile) {
			if (this.fixed) return false;

			this.elem.classList.add(`_fixed`);
			this.fixed = true;
			return true;
		}
	}
	unfix() {
		if (!this.mobile) {
			if (!this.fixed) return false;

			this.elem.classList.remove(`_fixed`);
			this.fixed = false;
		}
	}
	openMenu() {
		this.toggler.classList.add(`_active`);
		this.elem.classList.add(`_open`);

		this.openAnimation();
		this.open = true;
		return true;
	}
	closeMenu() {
		this.toggler.classList.remove(`_active`);
		this.elem.classList.remove(`_open`);

		this.open = false;
		return true;
	}
	toggleMenu() {
		if (this.mobile) {
			if (this.open) this.closeMenu();
			else this.openMenu();
		}
		return false;
	}

	enableMobileMod() {
		this.elem.addEventListener(`click`, (event) => {
			const target = event.target;

			if (target.closest(`#${this.toggler.id}`)) {
				this.toggleMenu();
			}
			if (target.tagName.toLowerCase() === "a") {
				this.closeMenu();
			}
		});

		return false;
	}

	enableDesctopMod() {
		let winScroll;

		window.addEventListener("scroll", () => {
			winScroll = document.querySelector("html").scrollTop;

			if (winScroll >= 500 && !this.fixed) {
				this.fix();
			} else if (winScroll <= 300 && this.fixed) {
				this.unfix();
			}
		});
	}

	toggleMenuMod() {
		if (window.screen.width <= 971) {
			this.unfix();
			this.mobile = true;
			this.enableMobileMod();
		} else {
			this.closeMenu();
			this.mobile = false;
			this.enableDesctopMod();
		}
	}

	openAnimation() {
		const openAnim = anime.timeline({
			easing: "easeInOutQuad",
			duration: 600,
			autoplay: false,
		});

		openAnim
			.add(
				{
					targets: `#${this.elem.id} .nav__menu li`,
					translateX: ["55%", "0"],
					opacity: [0, 1],
					delay: anime.stagger(150),
				},
				"+=200"
			)
			.add(
				{
					targets: `#${this.elem.id} .header__logo img`,
					scale: [0.95, 1],
					opacity: [0, 1],
				},
				"-=650"
			)
			.add(
				{
					targets: `#${this.elem.id} .nav__contacts .social__item img`,
					translateY: ["10%", "0"],
					opacity: [0, 1],
					duration: 300,
					delay: anime.stagger(150),
				},
				"-=500"
			)
			.add(
				{
					targets: `#${this.elem.id} .nav__contacts .contacts__item`,
					opacity: [0, 1],
					duration: 500,
				},
				"-=400"
			);

		openAnim.play();
	}
}

function initMenu() {
	const header = document.querySelector("#header");
	const headerToggler = header.querySelector("#headerToggler");

	const mainHeader = new HeaderBar(header, headerToggler);
	mainHeader.toggleMenuMod();
}
