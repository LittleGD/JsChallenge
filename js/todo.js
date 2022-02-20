const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function save(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



function addToDo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function deleteToDo(e){
    const li = e.target.parentElement;
        li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    save()
}

function toDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    addToDo(newToDoObj);
    save();
}

toDoForm.addEventListener("submit", toDoSubmit);

const getSave = localStorage.getItem(TODOS_KEY);

if(getSave !== null){
    const parsedToDos = JSON.parse(getSave);
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo);
}



