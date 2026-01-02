document.addEventListener("DOMContentLoaded", () => {
    const yearSelector = document.getElementById("yearSelector");
    const boxes = document.querySelectorAll(".tournament-box");

    console.log("Boxes found:", boxes.length); // DEBUG LINE

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            const year = yearSelector.value;
            const section = box.dataset.section;
            const target = box.dataset.link;

            const url = `./${section}/${year}/${target}.html`;
            console.log("Going to:", url); // DEBUG LINE

            window.location.href = url;
        });
    });
});
