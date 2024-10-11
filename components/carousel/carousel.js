import Items from "./items.js";

export class Carousel {
	constructor() {
		this.currentSlide = 0;
		this.slidesToShow = this.getSlidesToShow(); // Initialize slidesToShow
		this.render();
		this.addEventListeners();
		this.autoplay();
		this.updateCarousel(this.currentSlide); // Initialize carousel view
		this.handleResize(); // Adjust carousel on load
		window.addEventListener("resize", this.handleResize.bind(this)); // Resize listener
	}

	render() {
		const carouselHtml = `
		      <div id="discounts-carousel">
        <h1 class="title">
          Топовые скидки
        </h1>


        <div class="tabs" id="tabs">
          <h2 class="tab-item active">Питание</h2>
          <h2 class="tab-item">Связь</h2>
          <h2 class="tab-item">Магазины</h2>
        </div>

				 <div class="carousel">
        <div class="carousel-wrapper" id="carousel-wrapper"></div>
        <button class="carousel-prev carousel-btn">Prev</button>
        <button class="carousel-next carousel-btn">Next</button>
        <div id="carousel-dots" class="carousel-dots"></div>
      </div>

      </div>
     
    `;

		$("#right").append(carouselHtml);
	}

	getSlidesToShow() {
		const width = window.innerWidth;
		if (width < 500) return 1;
		if (width < 768) return 2;
		return 3; // Default for larger screens
	}

	handleResize() {
		const newSlidesToShow = this.getSlidesToShow();
		if (newSlidesToShow !== this.slidesToShow) {
			this.slidesToShow = newSlidesToShow;

			// Recalculate the dots based on the new slidesToShow
			const totalSlides = $(".carousel-slide").length;
			this.createDots(totalSlides); // Recreate the dots

			// Update the carousel to reflect new slide count
			this.updateCarousel(this.currentSlide);
		}
	}

	addEventListeners() {
		new Items();
		const slides = $(".carousel-slide");
		const totalSlides = slides.length;

		// Create dots based on the number of slides
		this.createDots(totalSlides);

		// Next button
		$(".carousel-next").on("click", () => {
			this.currentSlide = Math.min(this.currentSlide + 1, Math.ceil(totalSlides / this.slidesToShow) - 1);
			this.updateCarousel(this.currentSlide);
		});

		// Previous button
		$(".carousel-prev").on("click", () => {
			this.currentSlide = Math.max(this.currentSlide - 1, 0);
			this.updateCarousel(this.currentSlide);
		});

		// Dots click
		$(document).on("click", ".dot", event => {
			this.currentSlide = $(event.currentTarget).data("slide");
			this.updateCarousel(this.currentSlide);
		});
	}

	createDots(totalSlides) {
		$("#carousel-dots").empty(); // Clear existing dots
		const totalDots = Math.ceil(totalSlides / this.slidesToShow);

		for (let i = 0; i < totalDots; i++) {
			const activeClass = i === this.currentSlide ? "active" : ""; // Set active class for the initial dot
			$("#carousel-dots").append(`<span class="dot ${activeClass}" data-slide="${i}"></span>`);
		}
	}

	updateCarousel(index) {
		const slides = $(".carousel-slide");
		const totalSlides = slides.length;

		// Calculate how many slides are being shown in the viewport
		const visibleSlides = Math.min(this.slidesToShow, totalSlides);
		const offset = -(index * (100 / visibleSlides));

		$(".carousel-wrapper").css("transform", `translateX(${offset}%)`);

		this.updateDots();
	}

	updateDots() {
		const dots = $(".dot");
		dots.removeClass("active"); // Remove 'active' class from all dots
		const dotIndex = Math.floor(this.currentSlide);
		dots.eq(dotIndex).addClass("active"); // Add 'active' class to the current dot
	}

	autoplay() {
		const slides = $(".carousel-slide");
		const totalSlides = slides.length;

		let autoplayInterval = setInterval(() => {
			this.currentSlide = (this.currentSlide + 1) % Math.ceil(totalSlides / this.slidesToShow); // Increment and wrap around
			this.updateCarousel(this.currentSlide); // Update the carousel to show the next slide
		}, 2000); // Change slide every 2 seconds

		$(".carousel").hover(
			() => {
				clearInterval(autoplayInterval); // Pause autoplay on hover
			},
			() => {
				autoplayInterval = setInterval(() => {
					this.currentSlide = (this.currentSlide + 1) % Math.ceil(totalSlides / this.slidesToShow); // Increment and wrap around
					this.updateCarousel(this.currentSlide); // Update the carousel to show the next slide
				}, 2000);
			}
		);
	}
}

export default Carousel;
