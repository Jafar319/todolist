document.getElementById("add-task-btn").onclick = function () {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task");
    return;
  }

  const taskList = document.getElementById("task-list");
  const editingTask = document.querySelector(".editing");

  if (editingTask) {
    editingTask.firstChild.textContent = taskText;
    editingTask.classList.remove("editing");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
          ${taskText}
          <button class="update-btn">Update</button>
          <button class="delete-btn">Delete</button>
      `;

    taskList.appendChild(listItem);

    listItem.querySelector(".update-btn").onclick = function () {
      taskInput.value = taskText;
      listItem.classList.add("editing");
    };

    listItem.querySelector(".delete-btn").onclick = function () {
      taskList.removeChild(listItem);
    };
  }

  taskInput.value = "";
};
