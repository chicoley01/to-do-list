export function createTask() {
  const todoField = document.querySelector(".todo-list-field");

  let category = prompt("Digite a categoria da tarefa:", "TRABALHO");
  if (!category) return;

  const normalizedCategory = category.trim().toLowerCase();

  const taskName = prompt("Digite o nome da tarefa:");
  if (!taskName) return;

  let taskGroup = document.querySelector(`[data-category="${normalizedCategory}"]`);

  if (!taskGroup) {
    taskGroup = document.createElement("div");
    taskGroup.classList.add("task-group");
    taskGroup.setAttribute("data-category", normalizedCategory);

    const categoryTitle = document.createElement("h5");
    categoryTitle.classList.add("task-category");
    categoryTitle.textContent = capitalize(category);

    const tasksWrapper = document.createElement("div");
    tasksWrapper.classList.add("task-wrapper");

    taskGroup.appendChild(categoryTitle);
    taskGroup.appendChild(tasksWrapper);
    todoField.appendChild(taskGroup);
  }

  const taskWrapper = taskGroup.querySelector(".task-wrapper");

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
    <input type="checkbox" name="do">
    <label>${taskName}</label>
  `;

  taskWrapper.appendChild(task);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
