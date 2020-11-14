
$(document).ready(function () {
   
        $('#partners-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
                      
        })

})

let menuBtn = document.getElementById('menuBtn');
let menuCloseBtn = document.getElementById('menuClose')
if(menuBtn){
    menuBtn.addEventListener('click',()=>{
        document.body.classList.add('active-menu')
    })
}
if(menuCloseBtn){
    menuCloseBtn.addEventListener('click',()=>{
        document.body.classList.remove('active-menu')
    })
}

