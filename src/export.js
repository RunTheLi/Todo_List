export default function todo() {
    const addTodoBtn = document.getElementById("add-todo"); 
    const todosContainer = document.getElementById("todos"); 
    const displayContainer = document.getElementById("Display"); 

    // เช็ค attribute data-initialized เพื่อป้องกันการสร้าง Event Listener ซ้ำ
    if (addTodoBtn.hasAttribute("data-initialized")) {
        return;
    }
    addTodoBtn.setAttribute("data-initialized", "true");

    addTodoBtn.addEventListener("click", () => {
        const boxTodo = document.createElement("div");
        boxTodo.classList.add("todo-note");

        // สร้างฟิลด์ข้อมูลสำหรับ todo
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Please enter your name";
        nameInput.classList.add('todo-input');

        const textDescription = document.createElement('h4');
        textDescription.textContent = "Good Day!";
        boxTodo.appendChild(textDescription);

        const prioritySelect = document.createElement("select");
        const lowOption = document.createElement("option");
        lowOption.value = "low";
        lowOption.textContent = "Priority: Low";

        const mediumOption = document.createElement("option");
        mediumOption.value = "medium";
        mediumOption.textContent = "Priority: Medium";

        const highOption = document.createElement("option");
        highOption.value = "high";
        highOption.textContent = "Priority: High";

        prioritySelect.appendChild(lowOption);
        prioritySelect.appendChild(mediumOption);
        prioritySelect.appendChild(highOption);
        prioritySelect.classList.add("todo-input");

        const projectInput = document.createElement("input");
        projectInput.type = "text";
        projectInput.placeholder = "Enter project name";
        projectInput.classList.add("todo-input");

        const descriptionInput = document.createElement("textarea");
        descriptionInput.placeholder = "Enter description";
        descriptionInput.classList.add("todo-input");

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.classList.add("todo-input");

        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.classList.add("add-button");

        addTaskBtn.addEventListener("click", () => {
            const savedTodo = document.createElement("div");
            savedTodo.classList.add("saved-todo");
        
            savedTodo.innerHTML = `
                <div class="taskShow">
                    <h4 class="task-name">${nameInput.value}</h4>
                    <p class="task-priority">Priority: ${prioritySelect.value}</p>
                    <p class="task-project">Project: ${projectInput.value}</p>
                    <p class="task-description">Description: ${descriptionInput.value}</p>
                    <p class="task-due-date">Due Date: ${dateInput.value}</p>
                    <div class="task-actions">
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                    </div>
                </div>
            `;
        
            displayContainer.appendChild(savedTodo);
        
            displayContainer.removeChild(boxTodo);
        
            const editButton = savedTodo.querySelector(".edit-button");
            const deleteButton = savedTodo.querySelector(".delete-button");
        
            editButton.addEventListener("click", () => {

                nameInput.value = savedTodo.querySelector(".task-name").textContent;
                prioritySelect.value = savedTodo.querySelector(".task-priority").textContent.split(": ")[1];
                projectInput.value = savedTodo.querySelector(".task-project").textContent.split(": ")[1];
                descriptionInput.value = savedTodo.querySelector(".task-description").textContent.split(": ")[1];
                dateInput.value = savedTodo.querySelector(".task-due-date").textContent.split(": ")[1];
        
                displayContainer.removeChild(savedTodo);
        
                // Show boxTodo for editing
                displayContainer.appendChild(boxTodo);
            });
        
            deleteButton.addEventListener("click", () => {
                displayContainer.removeChild(savedTodo);
            });
        });
        
        const deleteTask = document.createElement("button");
        deleteTask.textContent = "Delete";
        deleteTask.classList.add("delete-button");

        deleteTask.addEventListener("click", () => {
            displayContainer.removeChild(boxTodo);
        });

        // Append elements to boxTodo
        boxTodo.appendChild(nameInput);
        boxTodo.appendChild(prioritySelect);
        boxTodo.appendChild(projectInput);
        boxTodo.appendChild(descriptionInput);
        boxTodo.appendChild(dateInput);
        boxTodo.appendChild(addTaskBtn);
        boxTodo.appendChild(deleteTask);

        // Append boxTodo to the display container
        displayContainer.appendChild(boxTodo);
    });
}
