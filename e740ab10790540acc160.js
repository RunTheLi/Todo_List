//index.js
import "./styles.css";
import todo from "./export.js";
import LatestProjectList from "./addproject.js";
import addtaskfunction from "./addtask.js";

// Event listener for the Add Project button
document.getElementById("add-project").addEventListener('click', () => {
    hideButton();
    
    const todoNotes = document.getElementsByClassName("todo-note");
    
    for (let todo of todoNotes) {
        todo.style.display = "none";
    }

    const taskShows = document.getElementsByClassName("taskShow");
    for (let task of taskShows) {
        task.style.display = "none";
    }

});

// Function to hide the "Add Todo" button
function hideButton() {
    const hidetodo = document.getElementById("add-todo");
    if (hidetodo) {
        hidetodo.style.display = "none";
    }
}

// Function to show the "Add Todo" button again
function showButton() {
    const showtodo = document.getElementById("add-todo");
    if (showtodo) {
        showtodo.style.display = "block";
    }
}


todo();
LatestProjectList();
addtaskfunction();


document.getElementById("add-task").addEventListener('click', () => {
    showButton(); // Ensure the "Add Todo" button is visible when "Add Task" is clicked
});