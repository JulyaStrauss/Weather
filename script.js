class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

// Obtém a navbar
var navbar = document.querySelector('header');

// Obtém a posição inicial da navbar
var sticky = navbar.offsetTop;

// Adiciona um evento de scroll à janela
window.onscroll = function() {
  // Verifica se a posição do scroll é maior ou igual à posição inicial da navbar
  if (window.pageYOffset >= sticky) {
    // Adiciona a classe 'fixed' para fixar a navbar
    navbar.classList.add('fixed');
  } else {
    // Remove a classe 'fixed' para retornar ao layout normal
    navbar.classList.remove('fixed');
  }
};

