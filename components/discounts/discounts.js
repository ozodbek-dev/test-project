 class Discounts {
	constructor() {
		this.render();
	}

	render() {
		const discountsHtml = `
        <section id="daily-discounts" >
      <div class="left-header">
        <h1>Скидки дня</h1>
        <h3>23 предложения</h3>
      </div>
      <div id="left-content" class="left-content"></div>
      <button class="btn btn-primary-outlined">
        <span class="btn__dotwrapper">
          <span class="btn__dot none"></span>
        </span>
        <div class="content">
          <span>Показать все</span>
        </div>
      </button>

    </section>
    `;
    
		$("#left").append(discountsHtml);
	}
 }

export default Discounts;
