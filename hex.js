const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#btn');
const updateclr = document.querySelector('.color');

function randHex(){
    let a = hex[Math.floor(Math.random()*hex.length)];
    let b = hex[Math.floor(Math.random()*hex.length)];
    let c = hex[Math.floor(Math.random()*hex.length)];
    let d = hex[Math.floor(Math.random()*hex.length)];
    let e = hex[Math.floor(Math.random()*hex.length)];
    let f = hex[Math.floor(Math.random()*hex.length)];
    let hexValue = `#${a}${b}${c}${d}${e}${f}`;
    console.log(hexValue);
    return hexValue;
}

btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = randHex();
    updateclr.textContent = `${randHex()}`;
})