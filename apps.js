// Pricing annual/monthly toggler code modified from practicalcodeacademy, 'pricing-table', 2020 [source code] https://github.com/PracticalCodeAcademy/pricing-table
const toggler = document.querySelector(".toggler");
const noobPrice = document.getElementById("noob-price");
const interPrice = document.getElementById("inter-price");
const ProPrice = document.getElementById("pro-price")

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        noobPrice.innerHTML = `$468 <span> / year </span>`;
        interPrice.innerHTML = `$828 <span> / year </span>`;
        ProPrice.innerHTML = `$1548 <span> / year </span>`;
    }
    else{
        noobPrice.innerHTML = `$39 <span> / month </span>`;
        interPrice.innerHTML = `$69 <span> / month </span>`;
        ProPrice.innerHTML = `$129 <span> / month </span>`;
    }
})


// Mobile Menu code modified from briancodex, 'html-css-js-website-smooth-scroll', 2020 [source code] https://github.com/briancodex/html-css-js-website-smooth-scroll#readme
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 750 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
