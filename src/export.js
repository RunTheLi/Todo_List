// export.js
export default function todo() {
    const addTodoBtn = document.getElementById("add-todo"); // Ensure the button exists
    const todosContainer = document.getElementById("todos"); // The list where todos will be added
    const displayContainer = document.getElementById("Display"); // The container to insert below the button

    addTodoBtn.addEventListener("click", () => {
        const boxTodo = document.createElement("div");
        boxTodo.classList.add("todo-note");
        
        //create a name input
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Please enter your name";
        nameInput.classList.add('todo-input');

        const textDescription = document.createElement('h4');
        textDescription.textContent = "Good Day!";
        boxTodo.appendChild(textDescription);

        // Create the Priority dropdown
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

        // Create the Project Name input field
        const projectInput = document.createElement("input");
        projectInput.type = "text";
        projectInput.placeholder = "Enter project name";
        projectInput.classList.add("todo-input");

        // Create the Description textarea
        const descriptionInput = document.createElement("textarea");
        descriptionInput.placeholder = "Enter description";
        descriptionInput.classList.add("todo-input");

        // Create the Date input field
        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.classList.add("todo-input");

         // Create the "Add Task" button
         const addTaskBtn = document.createElement("button");
         addTaskBtn.textContent = "Add Task";
         addTaskBtn.classList.add("add-button");

         const deleteTask = document.createElement("button");
         deleteTask.textContent = "Delete";
         deleteTask.classList.add("delete-button")

         deleteTask.addEventListener("click", () => {
            displayContainer.removeChild(boxTodo); // Remove the todo box
        });
        
        
        // Append all fields to the boxTodo div
        boxTodo.appendChild(nameInput);
        boxTodo.appendChild(prioritySelect);
        boxTodo.appendChild(projectInput);
        boxTodo.appendChild(descriptionInput);
        boxTodo.appendChild(dateInput);
        boxTodo.appendChild(addTaskBtn);
        boxTodo.appendChild(deleteTask);
        

        // Insert the new todo box directly below the "Add Todo" button
        displayContainer.appendChild(boxTodo);
    });
};
