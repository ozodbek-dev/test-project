// product.js

class Card {
	constructor(title, imageUrl, company, discount, subtitle, cashback, badge, badgeType) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.company = company;
		this.discount = discount;
		this.subtitle = subtitle;
		this.cashback = cashback;
		this.badge = badge;
		this.badgeType = badgeType;
	}

	render() {
		const badgeDate = `
       <span class="card-badge card-badge-date" >${this.badge}</span>
    `;
		const badgeTimer = `
      <span class="card-badge card-badge-timer">${this.badge}</span>
    `;

		const currentBadge = this.badge ? (this.badgeType === "timer" ? badgeTimer : badgeDate) : "";

		const cardHtml = `<!-- Card starts-->
        <div class="card ">
          <div class="card-image">
            <img src="${this.imageUrl}" alt=${this.name}
              style="width: 100%; border-radius: 5px;">
            ${currentBadge}
          </div>

          <div class="card-body">
            <div class="card-info">
              <h3 class="card-name">${this.company}</h3>
              <h2 class="card-title">${this.title}</h2>
            </div>

            <div class="card-footer">

              <span>${this.discount}</span>
              <div class="card-footer-badges">
                <span class="cashback">Кешбэк</span>
                <span class="percentage">5%</span>
              </div>
            </div>

            <span class="card-subtitle">${this.subtitle}</span>

          </div>
        </div>
        <!-- Card ends-->`;

		return cardHtml;
	}
}

export default Card;
