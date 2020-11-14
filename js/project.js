const backBtn = document.getElementById('back-btn')

if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.history.back()
    })
}

let header = document.querySelector('.header');
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