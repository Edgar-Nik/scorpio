let video = document.getElementById("myVideo");
let textAnim = 'Most consumers are not ready to purchase what you offer';
let container = document.querySelector('.top-container')
let textAnim2 = document.querySelector('.animation-text-second')
let textAnim3 = document.querySelector('.animation-text-opacity')

let changeField = document.getElementById('typing-text')

function startVideo(parent,child){
    video.play()
    parent.removeChild(child)
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
 
  console.log('ended')
  let newElem = document.createElement('div')
  let newField = document.createElement('p')
  newField.classList.add('animation-change-text')
  
  newElem.classList.add('showVideo_text')
  container.appendChild(newElem)
  newElem.appendChild(newField)

  let secondField = document.createElement('p')
  newElem.appendChild(secondField)
  secondField.classList.add('animation-text-second')
  secondField.innerHTML='YET';
  let lastField = document.createElement('p')
  lastField.classList.add('animation-text-opacity')
  newElem.appendChild(lastField)
  lastField.innerHTML='WE ARE HERE TO CHANGE THAT REALITY'
  homeAnim(newField,secondField,lastField)
 
  setTimeout(()=>{

    startVideo(container,newElem)
  },10000)
 
});
