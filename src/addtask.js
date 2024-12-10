//addtask.js
import todo from "./export.js";

export default function addtaskfunction() {
    const addtaskfunction = document.getElementById("add-task");
    addtaskfunction.addEventListener('click', () => {
        todo();
    })
}