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
    if(document.body.classList.contains("active-menu")){

      setTimeout(()=>{
        let textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
          .add({
            targets: '.ml12 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 3200,
            delay: (el, i) => 500 + 30 * i
          })
        
        let textWrapper1 = document.querySelector('.ml12_1');
        textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
          .add({
            targets: '.ml12_1 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 3200,
            delay: (el, i) => 500 + 30 * i
          })
        
        
        
          let textWrapper2 = document.querySelector('.ml12_2');
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
          .add({
            targets: '.ml12_2 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 3200,
            delay: (el, i) => 500 + 30 * i
          })
      },500)
    

    }
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


// Wrap every letter in a span
