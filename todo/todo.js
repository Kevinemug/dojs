const input = document.getElementById('input')
const button = document.getElementById('button')
const todo = document.getElementById('todos')





button.addEventListener('click',(e) =>{
    e.preventDefault()
if(input.value === '') {
 
    alert('kevine, stop the laziness')
    return
}
let div = document.createElement('div')
div.classList.add('liContainer')
let li = document.createElement('li')
let p= document.createElement('p')
let del = document.createElement('button')
let box = document.createElement('input')
box.setAttribute('type','checkbox')
del.innerHTML ="remove"
li.appendChild(p)
p.innerHTML= input.value;

div.appendChild(box)
div.appendChild(li)
div.appendChild(del)
input.value =''


todo.appendChild(div)

del.addEventListener('click',() =>{

    todo.removeChild(div)
    
    })

})
 