// storage.js
const STORAGE_KEY = "todoAppData";

export function saveToLocalStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadFromLocalStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { projects: [], todos: [] };
}

export function addTodoToStorage(todo) {
    const data = loadFromLocalStorage();
    data.todos.push(todo);
    saveToLocalStorage(data);
}

export function addProjectToStorage(project) {
    const data = loadFromLocalStorage();
    data.projects.push(project);
    saveToLocalStorage(data);
}

export function updateTodoInStorage(updatedTodo) {
    const data = loadFromLocalStorage();
    const index = data.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
        data.todos[index] = updatedTodo;
        saveToLocalStorage(data);
    }
}

export function deleteTodoFromStorage(todoId) {
    const data = loadFromLocalStorage();
    data.todos = data.todos.filter(todo => todo.id !== todoId);
    saveToLocalStorage(data);
}
