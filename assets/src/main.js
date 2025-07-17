import { createTask } from "./scripts/createtask.js";

const form = document.querySelector("form");
form.addEventListener("submit", createTask);
