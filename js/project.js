$(document).ready(function () {
   
    if(document.body.clientWidth<500){
        $("#otherProjects").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
          });
    }else{
        $("#otherProjects").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
          });
    }
  });


const backBtn = document.getElementById('back-btn')

if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.history.back()
    })
}
if(document.body.clientWidth>500){
    let header = document.querySelector('.header');
    if(header){
        if(window.scrollY< 1){
            header.style.background='#020611'
        }
        window.addEventListener('scroll', () => {
            if(window.scrollY< 1){
                header.style.background='#020611'
            }else if(window.scrollY> 1){
                header.style.background='none'
        
            }
           
        })
    }
    document.querySelector("#menuBtn").onclick = function (){
        if( document.querySelector(".menu-icon").classList.contains("menu-icon-active")){
            header.style.background='none'
        
        }else{
            if(window.scrollY< 1){
                header.style.background='#020611'
            }else if(window.scrollY> 1){
                header.style.background='none'
        
            }
        }
    }
    
}else{
    let header = document.querySelector(".header");
  if (window.scrollY < 1) {
    header.classList.add("mobile-head-bg");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      header.classList.add("mobile-head-bg");
    } else if (window.scrollY < 1) {
      header.classList.add("mobile-head-bg");
    }
  });
}

