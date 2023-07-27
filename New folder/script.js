const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="btn btn-danger" onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentNode;
  taskList.removeChild(li);
}
