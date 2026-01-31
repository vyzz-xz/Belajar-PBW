const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter button");

let tasks = [
    { title: "Belajar HTML", done: false },
    { title: "Belajar CSS", done: true },
    { title: "Belajar JavaScript", done: false },
];

let currentFilter = "all";

/* Render */
function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
    if (currentFilter === "active") return !task.done;
    if (currentFilter === "done") return task.done;
    return true;
    });

    filteredTasks.forEach((task, index) => {
    const taskEl = document.createElement("div");
    taskEl.className = `task ${task.done ? "done" : ""}`;

    taskEl.innerHTML = `
        <span>${task.title}</span>
        <button>${task.done ? "Undo" : "Done"}</button>
    `;

    taskEl.querySelector("button").addEventListener("click", () => {
        tasks[index].done = !tasks[index].done;
        renderTasks();
    });

    taskList.appendChild(taskEl);
    });
}

/* Add Task */
addBtn.addEventListener("click", () => {
    const value = taskInput.value.trim();
    if (!value) return;

    tasks.push({ title: value, done: false });
    taskInput.value = "";
    renderTasks();
});

/* Filter */
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderTasks();
    });
});

/* Initial */
renderTasks();
