const main = document.createElement("div");
main.classList.add("main");
document.body.appendChild(main);
const container = document.createElement("div");
container.classList.add("container");
main.appendChild(container);

function buildGameBoard(array) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${50}px`;
      square.style.height = `${50}px`;
      let mark = array[i][j];
      paintBoard(mark, square);
      container.append(square);
    }
  }
}

function paintBoard(mark, square) {
  if (mark == undefined) {
    square.classList.add("empty");
  } else if (mark == "X") {
    square.classList.add("hit");
  } else if (mark == "M") {
    square.classList.add("miss");
  } else if (mark == "P" || mark == "C" || mark == "B") {
    square.classList.add("ship");
  }
}

export { buildGameBoard };
