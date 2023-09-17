const inputlist = document.querySelector("#inputlist");
const list = document.querySelector("#list");
const todoinput = document.querySelector("#todoinput");
const enter = document.querySelector("#enter");

let todoss = [];

function savetodos(){
    localStorage.setItem("to do list", JSON.stringify(todoss))
}

function erasing(some){
    const target = some.target.parentElement;
    target.remove();
    todoss = todoss.filter(objecttodo => objecttodo.id != parseInt(target.id));
    savetodos();
}

function writetodo(a){
    const li = document.createElement("li");
    li.id = a.id;
    const span = document.createElement("span");
    const erase = document.createElement("button");
    span.innerText = a.text;
    erase.innerText = "X";
    li.appendChild(span);
    li.appendChild(erase);
    list.appendChild(li);
    erase.addEventListener("click", erasing)
}

function regist(event){
    event.preventDefault();  
    const todos = todoinput.value;
    todoinput.value = "";
    const objecttodo = {text:todos, id:Date.now()};
    todoss.push(objecttodo);
    writetodo(objecttodo);
    savetodos();
}

inputlist.addEventListener("submit", regist);

const savedtodos = localStorage.getItem("to do list");

if(savedtodos!=null){
    const lasttodos = JSON.parse(localStorage.getItem("to do list"));
    todoss = lasttodos; 
    lasttodos.forEach(writetodo);
}
