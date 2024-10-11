import Carousel from "./components/carousel/carousel.js";
import Items from "./components/carousel/items.js";
import CardsList from "./components/discounts/cards-list.js";
import Discounts from "./components/discounts/discounts.js";
import Faq from "./components/faq/faq.js";
import Header from "./components/header/header.js";
import Main from "./components/main-content/main-content.js";
import RightInfo from "./components/right-info/right-info.js";

$(document).ready(() => {
	new Header();
	new Items();
	new Main();
	new Discounts();
	new CardsList();
	new Carousel();
	new RightInfo();
	new Faq();
});
