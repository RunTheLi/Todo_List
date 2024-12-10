import "./styles.css";
import todo from "./export.js";
import addProjectList from "./addproject.js";
import addtaskfunction from "./addtask.js";

// Event listener for the Add Project button
document.getElementById("add-project").addEventListener('click', () => {
    hideButton(); // Hide the "Add Todo" button when "Add Project" is clicked
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

// Initialize the todo functionality
todo();
addProjectList();
addtaskfunction();

// Add event listener for the "Add Task" button
document.getElementById("add-task").addEventListener('click', () => {
    showButton(); // Ensure the "Add Todo" button is visible when "Add Task" is clicked
});
