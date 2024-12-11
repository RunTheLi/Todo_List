export function loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export function addTodoToStorage(todo) {
    const todos = loadFromLocalStorage();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

export function deleteTodoFromStorage(id) {
    let todos = loadFromLocalStorage();
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
}