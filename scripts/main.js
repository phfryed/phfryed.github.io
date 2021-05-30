let myImage = document.querySelector('img');

myImage.querySelector('img').onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/potato.png') {
      myImage.setAttribute('src','images/avocado.png');
    } else {
      myImage.setAttribute('src','images/potato.png');
    }
}