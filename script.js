//Select DOM Elements
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//Create the addTask Function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText != "") {
    alert("Please enter a task!");
  }
  //Task Creation and Removal
  const li = document.createElement("li");
  li.textContent = taskText;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => {
    taskList.removeChild(li);
    taskInput.value = "";

    //append remove button to list item
    li.appendChild(removeBtn);
    //append list item to task list
    taskList.append(li);
  };
}

//even listener for Add Task button
addButton.addEventListener("click", () => {
  addTask();
});

//even listener for pressing enter in the input field
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

//Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", addTask);
