//index.js
import "./styles.css";
import todo from "./export.js"; // Import the todo function
import addProjectList from "./addproject.js";
//import updateTask from "./taskData.js";

document.getElementById("add-project").addEventListener('click', () => {
    hideButton();
})

function hideButton() {
    const hidetodo = document.getElementById("add-todo");
    if (hidetodo) {
        hidetodo.style.display = "none"; 
    }
}

// Initialize the todo functionality
todo();
addProjectList();

