const yearSelector = document.getElementById("yearSelector");
const boxes = document.querySelectorAll(".tournament-box");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        const year = yearSelector.value;
        const target = box.dataset.link;

        // Example folder structure:
        // /WJC/2026/index.html
        // /Mens/2027/groups.html

        window.location.href = `./${target}/${year}/index.html`;
    });
});
