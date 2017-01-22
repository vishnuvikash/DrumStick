

function playSound(e){
  const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);// accesing the audio element
  const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);// returns the audio element
  //console.log(key);//dispaly the key element
  if(!audio) return;//returns nothing when no corresponding audio file found!!
  audio.currentTime=0;//starts a new session each time
  audio.play();// plays the audio elemnt
  key.classList.add('playing');
}
//removing the playing class after some selected time
function removeTransition(e){
  if(e.propertyName !=='transform') return;//listen to only property named transform and skip others
//  console.log(this);//prints the type of this is referencing to
  //console.log(e.propertyName);//makes note of the property
  this.classList.remove('playing');
}

//Selecting all keys that we have added in a list adding a function remove Transition to each when they are called
const keys= document.querySelectorAll('.key');

keys.forEach(key=> key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
