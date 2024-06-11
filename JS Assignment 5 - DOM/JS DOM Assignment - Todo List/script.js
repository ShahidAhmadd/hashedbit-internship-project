function submitfn(event) {
    event.preventDefault(); // Prevent form submission
    
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');
    
    if (todoInput.value.trim() === '') {
        return; // Do not add empty tasks
    }
    
    // Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    // Create list item
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    // Create complete button
    const completedButton = document.createElement('button');
    completedButton.innerText = 'Complete';
    completedButton.classList.add('complete-btn');
    completedButton.onclick = completeTask;
    todoDiv.appendChild(completedButton);
    
    // Create trash button
    const trashButton = document.createElement('button');
    trashButton.innerText = 'Delete';
    trashButton.classList.add('trash-btn');
    trashButton.onclick = deleteTask;
    todoDiv.appendChild(trashButton);
    
    // Append to list
    todoList.appendChild(todoDiv);
    
    // Clear input value
    todoInput.value = '';
}

function completeTask(event) {
    const item = event.target.parentElement.querySelector('.todo-item');
    item.classList.toggle('completed');
}

function deleteTask(event) {
    const item = event.target.parentElement;
    item.remove();
}
