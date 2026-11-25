const parentcontainer = document.querySelector("#container");

const button = document.createElement("button");
button.textContent = "New Grid";
button.addEventListener("click", () => {
    const newSize = prompt("Enter the size of the new grid (1-100):");
    if (newSize >= 1 && newSize <= 100) {
        parentcontainer.innerHTML = "";
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    };
});
document.body.insertBefore(button, parentcontainer);

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        parentcontainer.appendChild(row);

        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        };
    };

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
};



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