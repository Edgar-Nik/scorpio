$(document).ready(function () {
  $("#partners-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
if (document.querySelector(".menu-icon-wrapper")) {
  document.querySelector(".menu-icon-wrapper").onclick = function () {
    document.body.classList.toggle("active-menu");

    document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
    document.querySelector(".header").classList.toggle("menu-icon-active");
  };
}

if (document.querySelector(".video-planet")) {
  let blockTop = document.querySelector(".who-we-are").offsetTop;

  document.querySelector(".video-planet").addEventListener("click", () => {
    window.scrollTo(0, blockTop);
  });
}

if (document.body.clientWidth < 500) {
  let header = document.querySelector(".header");
  if (window.scrollY > 1) {
    header.classList.add("mobile-head-bg");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      header.classList.add("mobile-head-bg");
    } else if (window.scrollY < 1) {
      header.classList.remove("mobile-head-bg");
    }
  });
}
