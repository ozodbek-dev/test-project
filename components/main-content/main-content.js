 class MainContent {
	constructor() {
		this.render();
	}

	 render() {
		const mainHtml = `
    <main id="main" class="container">
			<div id="left" class="left"></div>
			<div id="right" class="right"></div>
		</main>
    `;

		$("header").after(mainHtml);
	}
 }

 export default MainContent
