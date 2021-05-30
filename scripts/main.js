//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'hello hello';

document.querySelector('html').onclick = function() {
	alert('Ouch! Stop poking me!');
}

/*
let myImage = document.querySelector('img');

myImage.querySelector('img').onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/potato.png') {
    	alert('oi');
      myImage.setAttribute('src','images/avocado.png');
    } else {
      myImage.setAttribute('src','images/potato.png');
    }
}