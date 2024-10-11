 class Header {
	constructor() {
		this.render();
		this.addEventListener();
	}

	render() {
		const headerHtml = `
      <header>
    <nav class="container desktop">
      <h1 class="header__logo">
        <a href="#">Logo</a>
      </h1>
      <ul class="header__links">
        <li>
          <img src="./shares/assets/icons/list.svg" alt="list">
          <span>Все предложения</span>
        </li>
        <li>
          <a href="#">Скидки</a>
        </li>
        <li>
          <a href="#">Акции</a>
        </li>
        <li>
          <a href="#">Промокоды</a>
        </li>
        <li>
          <a href="#">Кешбэк</a>
        </li>
      </ul>

      <ul class="header_socials">

        <li>
          <a href="#">
            <img src="./shares/assets/icons/search.svg" alt="search">
          </a>
        </li>

        <li>
          <a href="#">
            <img src="./shares/assets/icons/social.svg" alt="telegram">
          </a>
        </li>

        <li>
          <a href="#">
            <img src="./shares/assets/icons/Cabinet.svg" alt="cabinet">
          </a>
        </li>

        <li>
          <span>Ру</span>
        </li>

        <li>
          <button class="btn btn-primary">
            <span class="btn__dotwrapper">
              <span class="btn__dot"></span>
            </span>
            <div class="content">
              <span>Добавить скидку</span>
            </div>
          </button>
        </li>

        <button id="menu-btn" class="menu-btn">
          <img class="menu-btn" src="./shares/assets/icons/menu.svg" alt="menu">
        </button>
      </ul>

     
    </nav>
    <nav id="mobile" class="mobile container">
      <h1 class="header__logo flex items-center gap-2">
        <a href="#">Logo</a>
        <img id="close-btn" src="./shares/assets/icons/plus.svg" alt="faq" style="transform: rotate(45deg);cursor:pointer;">
      </h1>
      <ul class="links">
        <li>
          <a href="#">Скидки</a>
        </li>
        <li>
          <a href="#">Акции</a>
        </li>
        <li>
          <a href="#">Промокоды</a>
        </li>
        <li>
          <a href="#">Кешбэк</a>
        </li>
      </ul>

      <ul class="header_socials">


        <li>
          <a href="#">
            <img src="./shares/assets/icons/social.svg" alt="telegram">
          </a>
        </li>

        <li>
          <a href="#">
            <img src="./shares/assets/icons/Cabinet.svg" alt="cabinet">
          </a>
        </li>

        <li>
          <button class="btn btn-primary">
            <span class="btn__dotwrapper">
              <span class="btn__dot"></span>
            </span>
            <div class="content">
              <span>Добавить скидку</span>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  </header>
    `;

		$("body").prepend(headerHtml);
	}

	addEventListener() {
		$(document).ready(function () {
			$("#menu-btn").on("click", function () {
				$("#mobile").toggleClass("active");
			});

			$(document).on("click", function (event) {
				if (!$(event.target).closest("#mobile").length && !$(event.target).is(".menu-btn")) {
					$("#mobile").removeClass("active");
				}
			});

			$("#close-btn").on("click", function () {
				$("#mobile").toggleClass("active");
			});
		});
	}
}


export default Header;