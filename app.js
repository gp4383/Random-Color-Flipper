const body = document.querySelector('body');
const rgbbtn = document.querySelector('#rgbbtn');
const rgbcolor = document.querySelector('.rgbcolor');
const container2 = document.querySelector('#container2');

function randRGB(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let rgbcode = `rgb(${r},${g},${b})`;
    return rgbcode;
}
rgbbtn.addEventListener('click', function(){
    container2.style.background = randRGB();
    rgbcolor.textContent = `${randRGB()}`;
})