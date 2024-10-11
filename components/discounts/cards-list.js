import Card from "../card/card.js";

class CardsList {
	constructor() {
		this.cards = [
			{
				title: "В четверг скидки на рыбу",
				imageUrl: "./shares/assets/KORZINKA.jpg",
				discount: "Скидки",
				badge: false,
				cashback: "3%",
				subtitle: "Супермаркеты",
				company: "Korzinka.uz",
			},
			{
				title: "Акция 1+1",
				imageUrl: "./shares/assets/MANGO.jpg",
				discount: "Скидки",
				badge: false,
				cashback: "3%",
				subtitle: "Магазины брендовой одежды",
				company: "MANGO",
			},
			{
				title: "До — 60% на бытовую технику в ТЦ «Samarkand Darvoza»",
				imageUrl: "./shares/assets/TEXNOMART.jpg",
				discount: "Скидки",
				badge: false,
				cashback: "3%",
				subtitle: "Магазины электроники и бытовой техники",
				company: "TEXNOMART",
			},
			{
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
			const card = new Card(product.title, product.imageUrl, product.company, product.discount, product.subtitle,product.cashback, product.badge);
			$("#left-content").append(card.render());
		});
	}
}

export default CardsList;
