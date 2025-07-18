import { getSVG } from "./index.js";

export function generateTask(taskName) {
  const taskId = `task-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("data-id", taskId);

  const div = document.createElement("div");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = taskId;

  const label = document.createElement("label");
  label.setAttribute("for", taskId);
  label.textContent = taskName;

  const kebab = document.createElement("button");
  kebab.classList.add("kebab-icon");

  const dropdown = document.createElement("ul");
  dropdown.classList.add("dropdown", "hidden")

  const editOption = document.createElement("li")
  editOption.textContent = "Editar";
  editOption.classList.add("edit");

  const delOption = document.createElement("li")
  delOption.textContent = "Excluir";
  delOption.classList.add("delete");

  dropdown.append(editOption);
  dropdown.append(delOption);

  kebab.appendChild(getSVG("kebab"));
  kebab.appendChild(dropdown);

  div.appendChild(input);
  div.appendChild(label);

  task.appendChild(div);
  task.appendChild(kebab);
  
  return task;
}
