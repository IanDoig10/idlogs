
const items = document.querySelectorAll(".liA");

items.forEach(item => {
  item.addEventListener("click", () => {
    // Remove 'active' from all
    items.forEach(el => el.classList.remove("active"));
    // Add 'active' to the clicked one
    item.classList.add("active");
  });
});
