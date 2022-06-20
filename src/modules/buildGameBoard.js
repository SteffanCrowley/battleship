const main = document.createElement("div");
main.classList.add("main");
document.body.appendChild(main);
const container = document.createElement("div");
container.classList.add("container");
main.appendChild(container);

function buildGameBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${50}px`;
      square.style.height = `${50}px`;
      container.append(square);
    }
  }
}

export { buildGameBoard };
