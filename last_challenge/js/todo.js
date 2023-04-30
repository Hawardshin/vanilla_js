const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.querySelector("#todo-form input")
const toDOlist = document.querySelector("#todo-list");
// console.log(toDOlist);
// console.log(toDoInput);
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo=> toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  console.log("i will paint todo");
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click",deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDOlist.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  // toDoInput.value = null;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if (savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
