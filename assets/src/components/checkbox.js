export function createCheckbox(taskName) {
  const taskId = `task-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const wrapper = document.createElement("div");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = taskId;

  const label = document.createElement("label");
  label.setAttribute("for", taskId);
  label.textContent = taskName;

  wrapper.appendChild(input);
  wrapper.appendChild(label);

  return wrapper;
}
