const input = document.getElementById('input');
const btn = document.getElementById('btn');
btn.addEventListener('click',(e) => {
if(input.value === '') {
    alert('you have to type something')
 return}
    if(input.value === 'purple'){
        input.style.background ='purple'
       
    }else{
        input.style.background ='pink'
        input.value =''
        input.setAttribute('placeholder', "wrong color dude!")
    }




})
const input1 = document.getElementById('input1');
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click',(e) => {
if(input1.value === '') {
    alert('you have to type something')
 return}
    if(input1.value === 'blue'){
        input1.style.background ='blue'
       
    }else{
        input1.style.background ='pink'
        input1.value =''
        input1.setAttribute('placeholder', "wrong color dude!")
    }




})
const input2 = document.getElementById('input2');
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click',(e) => {
if(input2.value === '') {
    alert('you have to type something')
 return}
    if(input2.value === 'black'){
        input2.style.background ='black'
       
    }else{
        input2.style.background ='pink'
        input2.value =''
        input2.setAttribute('placeholder', "wrong color dude!")
    }




})