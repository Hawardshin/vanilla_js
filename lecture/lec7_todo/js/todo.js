const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
//document.querySelector("#todo-form input")
const toDOlist = document.querySelector("#todo-list");
console.log(toDOlist);
console.log(toDoInput);
function handleToDoSubmit(event){
  event.preventDefault();
  console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  // toDoInput.value = null;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
`
