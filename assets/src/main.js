import { createTask } from "./scripts/createtask.js";

document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.querySelector(".todo-list-field");
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", createTask);
  }

  if (todoList) {
    todoList.addEventListener("click", (event) => {
      const kebab = event.target.closest(".kebab-icon");

      if (kebab) {
        const task = kebab.closest(".task");

        document.querySelectorAll(".task.active").forEach((t) => {
          if (t !== task) t.classList.remove("active");
        });

        task.classList.toggle("active");

        return;
      }

      if (!event.target.closest(".dropdown")) {
        document
          .querySelectorAll(".task.active")
          .forEach((t) => t.classList.remove("active"));
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {});
