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
  removeBtn.classList.add("remove-btn");
  removeBtn.onclick = () => {
    taskList.removeChild(li);
    taskInput.value = "";

    //append remove button to list item
    li.appendChild(removeBtn);
    //append list item to task list
    taskList.append(li);
  };
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
  // Task creation logic remains the same

  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
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

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});
