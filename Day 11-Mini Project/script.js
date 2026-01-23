const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const menuItems = document.querySelectorAll(".menu-item");
const pageTitle = document.getElementById("pageTitle");
const pageContent = document.getElementById("pageContent");
const dashboardCards = document.getElementById("dashboardCards")

// Toggle sidebar
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
});

// Menu click
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        const page = item.dataset.page;

        pageTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1);
        pageContent.textContent = `Ini adalah halaman ${page}.`;

        if (page === "dashboard") {
            dashboardCards.style.display = "grid";
        } else {
            dashboardCards.style.display = "none";
        }
        
        if (window.innerWidth <= 768) {
            sidebar.classList.add("hide");
        }
    });
});
