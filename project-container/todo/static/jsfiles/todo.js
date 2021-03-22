// Selectors Target

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners Target

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);

// Functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to ul
    todoList.appendChild(todoDiv);
    //Clear todoInput.value
    todoInput.value = "";
}

function deleteItem(event) {
    const removeItem = event.target;
    if(removeItem.classList[0] === "trash-btn") {
        const rm = removeItem.parentElement;
        rm.classList.add("fall");
        rm.addEventListener("transitionend", ()=>rm.remove());

    }

    // SEt the class to completed... check .completed in css to see
    if (removeItem.classList[0] === "completed-btn") {
        const stroke =removeItem.parentElement;
        stroke.classList.toggle('completed');
    }

}