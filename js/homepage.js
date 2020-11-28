
window.addEventListener('scroll',()=>{
    let teamTop = document.querySelector('.who-we-are').offsetTop
    if(window.pageYOffset>=teamTop){
       
        document.querySelector('.hello-text-svg').classList.add('hello-text-svg_active')

        // document.querySelector('.austronaut').classList.add('austronaut_fixed')
    }else{
        // document.querySelector('.austronaut').classList.remove('austronaut_fixed')
    }
})