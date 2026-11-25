const parentcontainer = document.querySelector("#container");

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    parentcontainer.appendChild(row);

    for (let j = 0; j < 4; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
}

parentcontainer.querySelectorAll(".row").forEach((row) => {
    row.querySelectorAll(".column").forEach((column) => {
        column.addEventListener("mouseover", () => {
            column.style.backgroundColor = "black";
        });
        column.addEventListener("mouseleave", () => {
            column.style.backgroundColor = "white";
        });
    });
});