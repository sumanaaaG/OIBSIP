const item_template = document.getElementById("item_temp");
const add_button = document.getElementById("add");
const activeItemContainer = document.getElementById("active_items");
const completedItemContainer = document.getElementById("completed_items");
const clearCompletedButton = document.getElementById("clear_completed");
const box = document.querySelector(".box");
let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo") || "[]";
    return JSON.parse(value);
}

function setItems(items) {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("todo", itemsJson);
}

function addItem() {
    const newTask = {
        description: "",
        completed: false,
        timestamp: Date.now()
    };
    items.unshift(newTask);
    setItems(items);
    listrefresh();
}

function update(item, key, value) {
    item[key] = value;
    setItems(items);
    listrefresh();
}

function deleteTask(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
        setItems(items);
        listrefresh();
    }
}

function listrefresh() {
    activeItemContainer.innerHTML = "";
    completedItemContainer.innerHTML = "";

    items.sort((a, b) => b.timestamp - a.timestamp);

    for (const item of items) {
        const item_element = item_template.content.cloneNode(true);
        const descpinput = item_element.querySelector(".descp");
        const completedInput = item_element.querySelector(".done");
        const deleteButton = item_element.querySelector(".remove");

        descpinput.value = item.description;
        completedInput.checked = item.completed;

        descpinput.addEventListener("change", () => {
            update(item, "description", descpinput.value);
        });

        completedInput.addEventListener("change", () => {
            update(item, "completed", completedInput.checked);
        });

        deleteButton.addEventListener("click", () => {
            deleteTask(item);
        });

        if (item.completed) {
            completedItemContainer.appendChild(item_element);
        } else {
            activeItemContainer.appendChild(item_element);
        }
    }

    updateButtonVisibility();
}

function updateButtonVisibility() {
    const currentDisplay = activeItemContainer.style.display;
    add_button.style.display = currentDisplay === "block" ? "block" : "none";
    clearCompletedButton.style.display = currentDisplay === "none" ? "block" : "none";
}

const allTasksLink = document.getElementById("active_tasks");
const completedTasksLink = document.getElementById("completed_tasks");

allTasksLink.addEventListener("click", () => {
    activeItemContainer.style.display = "block";
    completedItemContainer.style.display = "none";
    add_button.style.display = "block";
    clearCompletedButton.style.display = "none";
    listrefresh();
});

completedTasksLink.addEventListener("click", () => {
    activeItemContainer.style.display = "none";
    completedItemContainer.style.display = "block";
    add_button.style.display = "none";
    clearCompletedButton.style.display = "block";
    listrefresh();
});

add_button.addEventListener("click", () => {
    addItem();
});

clearCompletedButton.addEventListener("click", () => {
    const newItems = items.filter(item => !item.completed);
    setItems(newItems);
    items = newItems;
    listrefresh();
});

window.addEventListener("load", () => {
    activeItemContainer.style.display = "block";
    completedItemContainer.style.display = "none";
    listrefresh();
});
