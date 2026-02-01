// STATE (DATA UTAMA)
let tasks = [];
let currentFilter = "all";

// ELEMENT
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter button");

// FUNCTIONS
// Render task ke layar
function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = getFilteredTasks();

    filteredTasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = `task ${task.done ? "done" : ""}`;

    taskDiv.innerHTML = `
        <span>${task.text}</span>
        <button onclick="toggleTask(${index})">
            ${task.done ? "Undo" : "Done"}
        </button>
    `;

    taskList.appendChild(taskDiv);
    });
}

// Filter data berdasarkan state
function getFilteredTasks() {
    if (currentFilter === "active") {
        return tasks.filter(task => !task.done);
    }
    if (currentFilter === "done") {
        return tasks.filter(task => task.done);
    }
    return tasks;
}

// Tambah task baru
function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({ text, done: false });
    taskInput.value = "";
    renderTasks();
}

// Toggle status task
function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

// Tambah task
addBtn.addEventListener("click", addTask);

// Filter click
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderTasks();
    });
});
