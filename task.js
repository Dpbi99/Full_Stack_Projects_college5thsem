let input = document.getElementById("taskInput");
let task = document.getElementById("taskList");
let btn = document.getElementById("addTaskButton");

btn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let list = document.createElement("li");
    list.innerHTML = input.value;

    let complete = document.createElement("button");
    complete.innerHTML = "Complete";
    complete.addEventListener("click", () => {
        list.style.textDecoration = "line-through";
    });

    let dlt = document.createElement("button");
    dlt.innerHTML = "Delete";
    dlt.addEventListener("click", () => {
        list.remove();
    });

    list.appendChild(complete);
    list.appendChild(dlt);
    task.appendChild(list);
    input.value = "";
});

// Allow adding task by pressing Enter
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});