import Accordion from "../accordion/accordion.js";

class Faq {
	constructor() {
		this.items = [
			{
				id: 1,
				title: "Какие компании представлены на сайте?",
				content: `Чтобы быть в курсе новых скидок и акций на сайте, вы можете подписаться на наш телеграм-канал или следить за новостями.
        
Мы регулярно отправляем информацию о новых предложениях и акциях нашим подписчикам, чтобы они всегда могли быть в курсе последних скидок и эксклюзивных предложений.

Также можно регулярно посещать сайт и проверять разделы с акциями и скидками`,
			},
			{
				id: 2,
				title: "Как я могу быть в курсе новых скидок и акций на сайте?",
				content: `Чтобы быть в курсе новых скидок и акций на сайте, вы можете подписаться на наш телеграм-канал или следить за новостями.
        
Мы регулярно отправляем информацию о новых предложениях и акциях нашим подписчикам, чтобы они всегда могли быть в курсе последних скидок и эксклюзивных предложений.

Также можно регулярно посещать сайт и проверять разделы с акциями и скидками`,
			},
			{
				id: 3,
				title: "Могу ли я поделиться найденными скидками и акциями с друзьями?",
				content: `Чтобы быть в курсе новых скидок и акций на сайте, вы можете подписаться на наш телеграм-канал или следить за новостями.
        
Мы регулярно отправляем информацию о новых предложениях и акциях нашим подписчикам, чтобы они всегда могли быть в курсе последних скидок и эксклюзивных предложений.

Также можно регулярно посещать сайт и проверять разделы с акциями и скидками`,
			},
		];
    this.render();
    this.renderItems();
	}

	render() {
		const html = `  
      <div id="faq" class="faq">
        <h1>FAQ</h1>
        <div class="items" id="faq-items"> </div>
      </div>
    `;

		$("#right-info").after(html);
  }
  
  renderItems() {
    this.items.forEach(item => {
      
      const accordion = new Accordion(item.title, item.content);
      console.log(accordion.render());
      $("#faq-items").append(accordion.render());
    })
  }
}

export default Faq;
