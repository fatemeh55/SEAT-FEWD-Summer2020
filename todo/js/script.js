const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;

  todoDiv.appendChild(newTodo);

  const completeButton = document.createElement("button");
  completeButton.innerHTML = "<i class='fas fa-check'></i>";
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  deleteButton.classList.add("trash-btn");

  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    todo.remove()

  }


  if (item.classList[0] === 'complete-btn') { 
    const todo = item.parentElement;
    todo.classList.toggle('completed')
  }


}
