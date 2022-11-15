const board = document.querySelector("#board");
const SQUARES_NUMBER = 594;
const colors = [
  "#ffd700",
  "#ffdab9",
  "#ffff00",
  "#eee8aa",
  "#fafad2",
  "#fffacd",
  "#ffffe0",
];

for (let i = 0; i < SQUARES_NUMBER; i = i + 1) {
  const square = document.createElement("div");
  square.classList.add("square");

  // square.addEventListener("mouseover", () => setColor(square));
  // square.addEventListener("mouseleave", () => removeColor(square));

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

// function setColor(element) {
//   const color = getRandomColor();
//   element.style.backgroundColor = color;
//   element.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
// }

// function removeColor(element) {
//   element.style.backgroundColor = "#1d1d1d";
//   element.style.boxShadow = `0 0 5px #000`;
// }

function setColor(event) {
  const element = event.target
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 5px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
