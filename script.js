
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let data = {
            'task': taskInput.value
        }

        localStorage.setItem('data', JSON.stringify(data))
        var taskItem = document.createElement("li");
        taskItem.className = "taskItem";
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskInput.value}</span>
            <button onclick="deleteTask(this)" class="deleteTaskBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskItem.addEventListener('click', function() {
            var checkbox = taskItem.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
        });

        taskInput.value = "";
    }
}

function deleteTask(btn) {
    var taskItem = btn.parentElement;
    taskItem.remove();
}