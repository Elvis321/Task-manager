let tasks = [];

function addTask() {
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const assignedUser = document.getElementById("task-user").value;

  const task = { title, description, assignedUser };
  tasks.push(task);

  renderTasks();
  resetForm();
}

function renderTasks() {
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.innerHTML = `<h3>${task.title}</h3>
                             <p>${task.description}</p>
                             <p>Assigned to: ${task.assignedUser}</p>`;
    taskList.appendChild(taskElement);
  });
}

function resetForm() {
  document.getElementById("task-form").reset();
}

document.addEventListener("DOMContentLoaded", function () {
  renderTasks();
});
