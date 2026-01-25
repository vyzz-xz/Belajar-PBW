// DATA DUMMY
const tasks = [
    { title: "Belajar HTML", status: "done" },
    { title: "Belajar CSS", status: "done" },
    { title: "Belajar JavaScript", status: "active" },
    { title: "Bikin Dashboard", status: "active" },
    { title: "Membuat WEB", status: "done" }
];

// AMBIL ELEMENT
const cardContainer = document.getElementById("cardContainer");
const filterButtons = document.querySelectorAll(".filters button");

// FUNGSI RENDER CARD
function renderCards(filter = "all") {
    cardContainer.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        if (filter === "all") return true;
        return task.status === filter;
    });

    filteredTasks.forEach(task => {
        const card = document.createElement("div");
        card.classList.add("card");

        if (task.status === "done") {
            card.classList.add("done");
        }

        card.textContent = task.title;
        cardContainer.appendChild(card);
    });
}

// EVENT FILTER
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        renderCards(btn.dataset.filter);
    });
});

// RENDER PERTAMA KALI
renderCards();
