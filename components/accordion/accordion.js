class Accordion {
	constructor(title, content) {
		this.title = title;
		this.content = content;
		this.$accordion = null; // To store the jQuery accordion DOM element
	}

	render() {
		const html = `
      <div class="accordion">
        <div class="accordion-header">
          <h1>${this.title}</h1>
          <img class="accordion-btn" src="./shares/assets/icons/plus.svg" alt="plus">
        </div>
        <pre class="accordion-content">
          ${this.content}
        </pre>
      </div>`;

		// Convert the HTML string to a jQuery object
		this.$accordion = $(html);

		// Attach event listeners
		this.addEventListener();

		return this.$accordion;
	}

	addEventListener() {
		const $header = this.$accordion.find(".accordion-header");
		const $content = this.$accordion.find(".accordion-content");
		const $btn = this.$accordion.find(".accordion-btn");

		// Toggle the accordion content and button state when the header is clicked
		$header.on("click", () => {
			$content.toggleClass("active");
			$header.toggleClass("active");
			$btn.toggleClass("active");
		});
	}
}

export default Accordion;
