const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const menuItems = document.querySelectorAll(".menu-item");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});
