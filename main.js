const pages = [...document.querySelectorAll(".page")];

let index = 0;

let [key, pageNum] = window.location.search.substr(1).split("=");

if (key === "page" && !isNaN(pageNum) && Number(pageNum) < pages.length && Number(pageNum) >= 0) {
    index = Number(pageNum);
}

showPage(index);

document.querySelectorAll(".sidebar-item").forEach(
    el => el.addEventListener("click", handleClick)
);

function handleClick(event) {
    const id = Number(event.target.id);
    window.history.pushState({}, null, "?page=" + id.toString());
    showPage(id);
}

function showPage(id) {
    for (let page of pages) {
        page.classList.remove("shown");
    }
    pages[id].classList.add("shown");
}