let video = document.getElementById("myVideo");
let textAnim = 'Most consumers are not ready to purchase what you offer';

let textAnim2 = document.querySelector('.animation-text-second')
let textAnim3 = document.querySelector('.animation-text-opacity')

let changeField = document.getElementById('typing-text')

function delayInner(i, value) {
    setTimeout(() => {
        changeField.innerHTML += value;
    }, i * 100);
  }
  
  function homeAnim() {
      if(changeField.innerHTML.length<=0){
        for (let i = 0; i < textAnim.length; i++) {
            delayInner(i, textAnim[i]);
            
        }
      }
    
 
  }


video.addEventListener("play", () => {
 
    let vidInterval = setInterval(() => {
        if(video.currentTime>=2 && video.currentTime<3){
            changeField.style.visibility='visible'
            textAnim2.style.display='block'
            textAnim3.style.display='block'
         
             console.log(video.currentTime);

             //function here ...
             homeAnim()
             

            // clearInterval(vidInterval)
        }else if((changeField.innerHTML=='Most consumers are not ready to purchase what you offer') && (video.currentTime<24)){
            textAnim2.classList.add('animation-text-second-animate')
            textAnim3.classList.add('animation-text-opacity-animate')
            changeField.classList.add('animation-change-text-animate')
        } else if(video.currentTime>=24 && video.currentTime<25){
            console.log(video.currentTime);
            changeField.innerHTML=''
            changeField.style.visibility='hidden'
            textAnim2.style.display='none'
            textAnim3.style.display='none'
            textAnim2.classList.remove('animation-text-second-animate')
            textAnim3.classList.remove('animation-text-opacity-animate')
            changeField.classList.remove('animation-change-text-animate')

        //    clearInterval(vidInterval)
       }
        
    }, 1000);
  
});
