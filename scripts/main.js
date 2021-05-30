/*document.querySelector('img').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/potato.png') {
      myImage.setAttribute('src','images/avocado.png');
    } else {
      myImage.setAttribute('src','images/potato.png');
    } 
}

// Personalized welcome message code


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('please enter your name.');
  if(!myName){
    setUserName();
  } else {
  localStorage.setItem('name',myName);
  myHeading.textContent = 'hi ' + myName;
  }
}

if  (!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'hi ' + storedName;
}

myButton.onclick = function(){
  setUserName();
}