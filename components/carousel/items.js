import Card from "../card/card.js";

class Items {
	constructor() {
		this.cards = [
			{
				id: 1,
				title: "Каждый вторник — 20% на все меню",
				imageUrl: "./shares/assets/GOSTY.jpg",
				discount: "Скидки",
				badge: "До 29 февраля",
				cashback: "3%",
				subtitle: "Рестораны",
				company: "Gosty",
			},
			{
				id: 2,
				title: "Скидки на еду и напитки",
				imageUrl: "./shares/assets/GOSTY.jpg",
				discount: "Скидки",
				badge: "71:59:59",
				cashback: "3%",
				subtitle: "Кафе",
				badgeType: "timer",
				company: "Shosh",
			},
			{
				id: 3,
				title: "Каждый вторник — 20% на все меню",
				imageUrl: "./shares/assets/SHOSH.jpg",
				discount: "Скидки",
				badge: "До 29 февраля",
				cashback: "3%",
				subtitle: "Рестораны",
				company: "CARAVAN",
			},
			{
				id: 4,
				title: "Ланч по выгодной цене и 2% кешбэк по промокоду",
				imageUrl: "./shares/assets/PETROVIG.jpg",
				discount: "Скидки",
				badge: "До 29 февраля",
				cashback: "3%",
				subtitle: "Рестораны",
				company: "Petrovich",
			},
			{
				id: 5,
				title: "В четверг скидки на рыбу",
				imageUrl: "./shares/assets/KORZINKA.jpg",
				discount: "Скидки",
				badge: false,
				cashback: "3%",
				subtitle: "Супермаркеты",
				company: "Korzinka.uz",
			},
			{
				id: 6,
				title: "Акция 1+1",
				imageUrl: "./shares/assets/MANGO.jpg",
				discount: "Скидки",
				badge: false,
				cashback: "3%",
				subtitle: "Магазины брендовой одежды",
				company: "MANGO",
			},
			{
				id: 7,
				title: "До — 60% на бытовую технику в ТЦ «Samarkand Darvoza»",
				imageUrl: "./shares/assets/TEXNOMART.jpg",
				discount: "Скидки",
				badge: false,
				cashback: "3%",
				subtitle: "Магазины электроники и бытовой техники",
				company: "TEXNOMART",
			},
			{
				id: 8,
				title: "При покупке CIF пачка губок Salixan БЕСПЛАТНО",
				imageUrl: "./shares/assets/MAKRO.jpg",
				discount: "Акции",
				badge: false,
				cashback: "3%",
				subtitle: "Супермаркеты",
				company: "Makro",
			},
		];
		this.renderProducts();
	}

	renderProducts() {
		this.cards.forEach(product => {
			const card = new Card(
				product.title,
				product.imageUrl,
				product.company,
				product.discount,
				product.subtitle,
				product.cashback,
				product.badge
			);
			let slide = `
      <div class="carousel-slide">
          ${card.render()}
      </div>
      `;

			// if (product.id === 1) {
			//   slide = `
			//   <div class="carousel-slide active">
			//     ${card.render()}
			//   </div>`;
			// }

			$("#carousel-wrapper").append(slide);
		});
	}
}

export default Items;
