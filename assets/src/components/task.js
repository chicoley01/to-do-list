import { createKebabIcon } from "./index.js";

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

  const kebab = createKebabIcon();

  div.appendChild(input);
  div.appendChild(label);

  task.appendChild(div);
  task.appendChild(kebab);
  
  return task;
}
