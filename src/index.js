//index.js
import "./styles.css";
import todo from "./export.js";
import addProjectList from "./addproject.js";
import addtaskfunction from "./addtask.js";

// Event listener for the Add Project button
document.getElementById("add-project").addEventListener('click', () => {
    // เรียกฟังก์ชัน hideButton() ที่จะซ่อนปุ่ม "Add Todo"
    hideButton();
    
    // ใช้ getElementsByClassName เพื่อเลือกกล่อง todo ทั้งหมดที่มีคลาส "todo-note"
    const todoNotes = document.getElementsByClassName("todo-note");
    
    // ลูปผ่านทุกๆ todoNote และทำให้ display เป็น "none"
    for (let todo of todoNotes) {
        todo.style.display = "none";
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

// Initialize the todo functionality
todo();
addProjectList();
addtaskfunction();

// Add event listener for the "Add Task" button
document.getElementById("add-task").addEventListener('click', () => {
    showButton(); // Ensure the "Add Todo" button is visible when "Add Task" is clicked
});
