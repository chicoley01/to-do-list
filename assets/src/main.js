import { initComponents, getSVG } from "./components/index.js";
import { createTask } from "./scripts/createtask.js";

document.addEventListener("DOMContentLoaded", async () => {
  await initComponents();

  const newTaskBtn = document.getElementById("new-task-btn");
  const plusSVG = getSVG("plus");
  newTaskBtn.appendChild(plusSVG);
  newTaskBtn.addEventListener("click", () => {
    document.querySelector("dialog").showModal();
  });

  const closeBtn = document.querySelector("div.modal-header button");
  const closeSVG = getSVG("close");
  closeBtn.appendChild(closeSVG);
  closeBtn.addEventListener("click", () => {
    document.querySelector("dialog").close();
  });

  const filterBtn = document.getElementById("filter-btn");
  const filterSVG = getSVG("filter");
  filterBtn.appendChild(filterSVG);

  const cancelBtn = document.querySelector(".cancel");
  cancelBtn.addEventListener("click", () => {
    document.querySelector("dialog").close();
  });

  const confirmBtn = document.querySelector(".confirm");
  confirmBtn.addEventListener("click", createTask);

  const todoList = document.querySelector(".todo-list-field");

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