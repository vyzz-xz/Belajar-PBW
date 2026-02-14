let tasks = [];
let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter");

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
    tasks = JSON.parse(saved);
    }
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

tasks.push({
    text: text,
    done: false
});

    taskInput.value = "";
    saveToLocalStorage();
    renderTasks();
}


function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveToLocalStorage();
    renderTasks();
}


function getFilteredTasks() {
    if (currentFilter === "active") {
    return tasks.filter(task => !task.done);
    }

    if (currentFilter === "done") {
    return tasks.filter(task => task.done);
    }

    return tasks;
}


function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = getFilteredTasks();

filteredTasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");

    if (task.done) {
        taskDiv.classList.add("done");
    }

    const span = document.createElement("span");
    span.textContent = task.text;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = task.done ? "Undo" : "Done";
    toggleBtn.onclick = () => toggleTask(index);

    taskDiv.appendChild(span);
    taskDiv.appendChild(toggleBtn);
    taskList.appendChild(taskDiv);
});
}


filterButtons.forEach(button => {
    button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    currentFilter = button.dataset.filter;
    renderTasks();
});
});


addBtn.addEventListener("click", addTask);

loadFromLocalStorage();
renderTasks();