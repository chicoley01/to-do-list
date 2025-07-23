export function renderDateSelector() {
  const weekDays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

  const days = 7;

  for (let i = -days; i <= days; i++) {
    const dateSelector = document.querySelector(".date-selector");

    const data = new Date();
    data.setDate(data.getDate() + i);

    const day = data.getDate();
    const weekDay = weekDays[data.getDay()];

    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");

    const weekP = document.createElement("p");
    weekP.classList.add("week");
    weekP.textContent = weekDay;

    const dayP = document.createElement("p");
    dayP.classList.add("day");
    dayP.textContent = day;

    dateContainer.appendChild(weekP);
    dateContainer.appendChild(dayP);
    dateSelector.appendChild(dateContainer);
  }
}
