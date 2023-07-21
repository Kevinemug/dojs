const input = document.getElementById('input')
const button = document.getElementById('button')
const todo = document.getElementById('todos')





button.addEventListener('click',(e) =>{
    e.preventDefault()
let div = document.createElement('div')
div.classList.add('liContainer')
let li = document.createElement('li')
let p= document.createElement('p')
let del = document.createElement('button')
del.innerHTML ="remove"
li.appendChild(p)
p.innerHTML= input.value;

div.appendChild(li)
div.appendChild(del)



todo.appendChild(div)

del.addEventListener('click',() =>{

    todo.removeChild(div)
    
    })

})
 