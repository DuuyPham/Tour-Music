const Buybtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
const menuMobile = document.querySelector(".sub-navbar-mobile");
const menuMobileIcon = document.querySelector(".navbar-mobile-menu");
const navList = document.querySelectorAll(".sub-nav-mobile-item");
const content = document.querySelector('#content');
const headerMobile = document.querySelector('.nav-mobile-header');
const overlay = document.querySelector('.overlay');



// Hàm thực hiện thêm class open vào modal
function ShowBuyTicket() {
  modal.classList.add("open");
}

// Hàm thực hiện gỡ bỏ class open của modal
function HideBuyTicket() {
  modal.classList.remove("open");
}

// vòng lặp để lắng nghe event Click vào từng nút button
for (const Buybtn of Buybtns) {
  Buybtn.addEventListener("click", ShowBuyTicket);
}

modalClose.addEventListener("click", HideBuyTicket);
modal.addEventListener("click", HideBuyTicket);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// show menu on mobile
function showMenuMobile() {
  menuMobileIcon.onclick = () => {
    menuMobile.classList.toggle('active');
    overlay.classList.toggle('open');
  }
}
// hide menu on mobile
function hideMenu() {
  const logoHeader = document.querySelector('.logo-header');
  // hide menu when click on HOME
  logoHeader.onclick = () => {
    menuMobile.classList.remove('active');
    overlay.classList.remove('open');
  }

}

// hide menu when click on each item menu
navList.forEach(navItem => {
  navItem.onclick = () => {
    menuMobile.classList.toggle('active');
    overlay.classList.remove('open');

  }
})

// hide menu when click on body page
overlay.onclick = (e) => {
  menuMobile.classList.remove('active');
  overlay.classList.remove('open');
}

showMenuMobile();
hideMenu();

