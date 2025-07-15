import { createTask } from './scripts/createtask.js';

document.addEventListener('DOMContentLoaded', () => {
  const newTaskBtn = document.getElementById('new-task-btn');

  newTaskBtn.addEventListener('click', createTask);
});