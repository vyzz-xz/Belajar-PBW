// DATA
const tasks = [
    { title: "Belajar HTML", status:"done" },
    { title: "Belajar CSS", status:"done" },
    { title: "Belajar Javascript", status:"active" },
    { title: "Membuat Dashboard", status:"active" },
    { title: "Membuat Website", status:"done" },
];

const cardContainer = document.getElementById("cardContainer");
const filterButtons = document.querySelectorAll(".filters button");

// RENDER CARD
function renderCards(filter = "all") {
    cardContainer.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        if (filter === "all") return true;
        return task.status === filter;
    });

    filteredTasks.forEach((task, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        if (task.status === "done") {
            card.classList.add("done");
        }

        card.textContent = task.title;

        // TOGGLE STATUS
        card.addEventListener("click", () =>{
            task.status = task.status === "active" ? "done" : "active";
            renderCards(filter);
        });

        cardContainer.appendChild(card);
    });
}

// FILTER BUTTON
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        renderCards(btn.dataset.filter);
    });
});

renderCards();