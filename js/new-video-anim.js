let video = document.getElementById("myVideo");
let textAnim = 'Most consumers are not ready to purchase what you offer';
let container = document.querySelector('.top-container')
let textAnim2 = document.querySelector('.animation-text-second')
let textAnim3 = document.querySelector('.animation-text-opacity')

let changeField = document.getElementById('typing-text')

// function startVideo(parent,child){
//     video.play()
//     parent.removeChild(child)
// }
function startVideo(){
  document.querySelector('.animated-texts-wrap').style.display='none'

  video.play()

}
function delayInner(field,secondField,lastField,i, value) {
    setTimeout(() => {
        field.innerHTML += value;
        if(field.innerHTML===textAnim){
            secondField.classList.add('animation-text-second-animate') 
            lastField.classList.add('animation-text-opacity-animate')
        }
    }, i * 100);
    
  }
  
  function homeAnim(field,secondField,lastField) {
     
        for (let i = 0; i < textAnim.length; i++) {
            delayInner(field,secondField,lastField,i, textAnim[i]);    
        
      }
  }


video.addEventListener("ended", () => {
 
  // console.log('ended')
  // let newElem = document.createElement('div')
  // let newField = document.createElement('p')
  // newField.classList.add('animation-change-text')
  
  // newElem.classList.add('showVideo_text')
  // container.appendChild(newElem)
  // newElem.appendChild(newField)

  // let secondField = document.createElement('p')
  // newElem.appendChild(secondField)
  // secondField.classList.add('animation-text-second')
  // secondField.innerHTML='YET';
  // let lastField = document.createElement('p')
  // lastField.classList.add('animation-text-opacity')
  // newElem.appendChild(lastField)
  // lastField.innerHTML='WE ARE HERE TO CHANGE THAT REALITY'
  // homeAnim(newField,secondField,lastField)
  document.querySelector('.animated-texts-wrap').style.display='flex'

  let textWrapper = document.querySelector('.ml13');
  let textWrapper1 = document.querySelector('.ml13_1');

  let textWrapper2 = document.querySelector('.ml13_2');

  if(textWrapper && textWrapper1 && textWrapper2){
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
    anime.timeline({loop: false})
      .add({
        targets: '.ml13 .letter',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      }).add({
        targets: '.ml13 .letter',
        translateY: [0,-100],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
      });
  
      textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: false})
        .add({
          targets: '.ml13_1 .letter',
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 300 + 30 * i
        }).add({
          targets: '.ml13_1 .letter',
          translateY: [0,-100],
          opacity: [1,0],
          easing: "easeInExpo",
          duration: 1200,
          delay: (el, i) => 100 + 30 * i
        });
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
          .add({
            targets: '.ml13_2 .letter',
            translateY: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 300 + 30 * i
          }).add({
            targets: '.ml13_2 .letter',
            translateY: [0,-100],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1200,
            delay: (el, i) => 100 + 30 * i
          });
  
  }
 
  // setTimeout(()=>{

  //   startVideo(container,newElem)
  // },10000)
  setTimeout(()=>{

    startVideo()
  },8000)


 
});
