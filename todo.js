const toDoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt  (li.id)); 
    saveToDos();
}
function completeTodo(event){
    const li = event.target.parentElement;
    li.classList.toggle("completed");
    const updatedToDo.completed = !updatedToDo.completed;
    saveToDos();
}
    
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);
    const complete = document.createElement("button");
    complete.innerText = "✔️";
    button.addEventListener("click",completeTodo);
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(complete);
    if (newTodo.completed) {
        li.classList.add("completed");
    }
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj)
    saveToDos();

}


toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}   


