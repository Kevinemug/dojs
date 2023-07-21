let display = document.getElementById('display')
let five = document.getElementById('five')
let fifteen = document.getElementById('fifteen')
let ten = document.getElementById('ten')

five.addEventListener('click',() => {

five = Number(display.innerHTML) + 5
display.innerHTML =five

})
ten.addEventListener('click',() => {

ten = Number(display.innerHTML) + 10
display.innerHTML =ten

})
fifteen.addEventListener('click',() => {

fifteen = Number(display.innerHTML) + 15
display.innerHTML =fifteen

})

window.addEventListener('DOMContentLoaded',  () =>{
let current =0
const updateDisplay = () => {
    display.innerHTML = current;
};
const countdown = () => {
        current += 10;
        updateDisplay();
};
updateDisplay();

setTimeout(() => {
    setInterval(countdown, 1000); // Repeat the countdown every second
}, 1000);

})


