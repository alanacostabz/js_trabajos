const activeGoalElement = document.querySelector("#active-goal h2");
const goalListElement = document.querySelector("#all-goals ul");

const goals = [
  {
    id: "g1",
    text: "Learn all about JS!",
  },
  {
    id: "g2",
    text: "Understand JS function execution.",
  },
];

function setAsActiveHandler(goalID) {
  const selectedGoal = goals.find((g) => g.id === goalID);
  activeGoalElement.textContent = selectedGoal.text;
}

function init() {
  for (const goal of goals) {
    const goalElement = document.createElement("li");
    goalElement.innerHTML = `
      <span>${goal.text}</span>
      <button>Set as Active Goal</button>
    `;
    goalElement
      .querySelector("button")
      .addEventListener("click", setAsActiveHandler.bind(null, goal.id));
    goalListElement.append(goalElement);
  }
}

init();
