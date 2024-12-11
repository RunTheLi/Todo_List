import { addTodoToStorage, loadFromLocalStorage, deleteTodoFromStorage } from "./storage.js";

export default function todo() {
    const addTodoBtn = document.getElementById("add-todo");
    const displayContainer = document.getElementById("Display");

    // Prevent duplicate event listeners
    if (addTodoBtn.hasAttribute("data-initialized")) {
        return;
    }
    addTodoBtn.setAttribute("data-initialized", "true");

    // Load existing todos from localStorage on page load
    const existingTodos = loadFromLocalStorage();
    existingTodos.forEach(todo => {
        const savedTodo = createSavedTodo(todo);
        displayContainer.appendChild(savedTodo);
    });

    // Event listener for the "Add Todo" button
    addTodoBtn.addEventListener("click", () => {
        const boxTodo = createTodoBox();
        displayContainer.appendChild(boxTodo);
    });

    // Function to create the input box for a new todo
    function createTodoBox() {
        const boxTodo = document.createElement("div");
        boxTodo.classList.add("todo-note");

        const nameInput = createInput("text", "Please enter your name");
        const prioritySelect = createPriorityDropdown();
        const projectInput = createInput("text", "Enter project name");
        const descriptionInput = createInput("textarea", "Enter description");
        const dateInput = createInput("date", "");

        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.classList.add("add-button");

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.textContent = "Delete";
        deleteTaskBtn.classList.add("delete-button");

        // Add Task functionality
        addTaskBtn.addEventListener("click", () => {
            const todoData = {
                id: Date.now(), // Generate a unique ID for the todo
                name: nameInput.value,
                priority: prioritySelect.value,
                project: projectInput.value,
                description: descriptionInput.value,
                dueDate: dateInput.value,
            };

            addTodoToStorage(todoData); // Save todo to localStorage
            const savedTodo = createSavedTodo(todoData);
            displayContainer.appendChild(savedTodo);
            displayContainer.removeChild(boxTodo);
        });

        // Delete Task functionality
        deleteTaskBtn.addEventListener("click", () => {
            displayContainer.removeChild(boxTodo);
        });

        // Append elements to boxTodo
        boxTodo.appendChild(nameInput);
        boxTodo.appendChild(prioritySelect);
        boxTodo.appendChild(projectInput);
        boxTodo.appendChild(descriptionInput);
        boxTodo.appendChild(dateInput);
        boxTodo.appendChild(addTaskBtn);
        boxTodo.appendChild(deleteTaskBtn);

        return boxTodo;
    }

    // Function to create a saved todo element
    function createSavedTodo(todoData) {
        const savedTodo = document.createElement("div");
        savedTodo.classList.add("saved-todo");

        savedTodo.innerHTML = `
            <div class="taskShow">
                <h4 class="task-name">${todoData.name}</h4>
                <p class="task-priority">Priority: ${todoData.priority}</p>
                <p class="task-project">Project: ${todoData.project}</p>
                <p class="task-description">Description: ${todoData.description}</p>
                <p class="task-due-date">Due Date: ${todoData.dueDate}</p>
                <div class="task-actions">
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            </div>
        `;

        const editButton = savedTodo.querySelector(".edit-button");
        const deleteButton = savedTodo.querySelector(".delete-button");

        // Edit functionality
        editButton.addEventListener("click", () => {
            const boxTodo = createTodoBox();
            const nameInput = boxTodo.querySelector("input[type='text']");
            const prioritySelect = boxTodo.querySelector("select");
            const projectInput = boxTodo.querySelector("input[type='text']");
            const descriptionInput = boxTodo.querySelector("textarea");
            const dateInput = boxTodo.querySelector("input[type='date']");

            nameInput.value = todoData.name;
            prioritySelect.value = todoData.priority;
            projectInput.value = todoData.project;
            descriptionInput.value = todoData.description;
            dateInput.value = todoData.dueDate;

            deleteTodoFromStorage(todoData.id); // Remove old data from storage
            displayContainer.removeChild(savedTodo);
            displayContainer.appendChild(boxTodo);
        });

        // Delete functionality
        deleteButton.addEventListener("click", () => {
            deleteTodoFromStorage(todoData.id); // Remove todo from storage
            displayContainer.removeChild(savedTodo);
        });

        return savedTodo;
    }

    // Utility function to create input elements
    function createInput(type, placeholder) {
        const input = document.createElement(type === "textarea" ? "textarea" : "input");
        if (type !== "textarea") input.type = type;
        input.placeholder = placeholder;
        input.classList.add("todo-input");
        return input;
    }

    // Utility function to create a priority dropdown
    function createPriorityDropdown() {
        const select = document.createElement("select");

        const options = ["low", "medium", "high"].map(priority => {
            const option = document.createElement("option");
            option.value = priority;
            option.textContent = `Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}`;
            return option;
        });

        options.forEach(option => select.appendChild(option));
        select.classList.add("todo-input");
        return select;
    }
}
