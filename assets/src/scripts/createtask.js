import { generateTask } from "../components/index.js";

export function createTask(event) {
  event.preventDefault();

  try {
    const categoryInput = document.querySelector("#category-input");
    const taskNameInput = document.querySelector("#name-input");

    const category = categoryInput.value.trim();
    const taskName = taskNameInput.value.trim();

    if (!category || !taskName) return false;

    const todoField = document.querySelector(".todo-list-field");

    const normalizedCategory = category.toLowerCase();

    let taskGroup = document.querySelector(
      `[data-category="${normalizedCategory}"]`
    );

    if (!taskGroup) {
      taskGroup = document.createElement("div");
      taskGroup.classList.add("task-group");
      taskGroup.setAttribute("data-category", normalizedCategory);

      const categoryTitle = document.createElement("h4");
      categoryTitle.classList.add("task-category");
      categoryTitle.textContent = capitalize(category);

      const tasksWrapper = document.createElement("div");
      tasksWrapper.classList.add("task-wrapper");

      taskGroup.appendChild(categoryTitle);
      taskGroup.appendChild(tasksWrapper);
      todoField.appendChild(taskGroup);
    }

    const taskWrapper = taskGroup.querySelector(".task-wrapper");

    const task = generateTask(taskName);

    taskWrapper.appendChild(task);

    // Limpa e fecha modal
    categoryInput.value = "";
    taskNameInput.value = "";
    document.querySelector("dialog").close();
  } catch (error) {
    console.error("Erro ao criar a tarefa:", error);
    alert("Ocorreu um erro. Veja o console.");
  }

  return false;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}