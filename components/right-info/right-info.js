

class RightInfo{
  constructor() {
    this.render();
  }
  render() {
    const htmlContent = `
      <div class="right-info" id="right-info">
        <h1>Добро пожаловать на сайт</h1>
        <h3>Ваш надёжный помощник в поиске лучших скидок и акций различных компаний!</h3>
        <p>Мы собрали для вас все самые выгодные предложения, чтобы вы могли сэкономить свои деньги и получить максимум удовольствия от покупок.</p>

        <h2>
        Развернуть текст
        </h2>
      
      </div>
    `;
    
    $("#discounts-carousel").after(htmlContent);
    }
}

export default RightInfo