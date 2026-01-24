const menus = document.querySelectorAll(".menu");
const cardsContainer = document.getElementById("cards");
const pageTitle = document.getElementById("pageTitle");

const dashboardData = [
    { title: "Users", value: 1200 },
    { title: "Projects", value: 32 },
    { title: "Revenue", value: "Rp 12jt" },
    { title: "Growth", value: "+18%" },
    { title: "Total", value: "1500"},
];

function renderDashboard() {
    cardsContainer.innerHTML = "";
    dashboardData.forEach(item => {
    cardsContainer.innerHTML += `
        <div class="card">
        <h3>${item.title}</h3>
        <p>${item.value}</p>
        </div>
    `;
    });
}

function clearContent() {
    cardsContainer.innerHTML = "<p>Konten belum tersedia</p>";
}

menus.forEach(menu => {
    menu.addEventListener("click", () => {
    menus.forEach(m => m.classList.remove("active"));
    menu.classList.add("active");

    const page = menu.dataset.page;
    pageTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1);

    if (page === "dashboard") {
        renderDashboard();
    } else {
        clearContent();
    }
    });
});

// default load
renderDashboard();