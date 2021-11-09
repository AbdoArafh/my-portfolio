const pages = [...document.querySelectorAll(".page")];

pages[0].classList.add("shown");

document.querySelectorAll(".sidebar-item").forEach(
    el => el.addEventListener("click", showPage)
);

function showPage(event) {
    const id = Number(event.target.id);
    for (let page of pages) {
        page.classList.remove("shown");
    }
    pages[id].classList.add("shown");
}