import Board from "./board";
import Ship from "./ship";

function beginGame() {
  const main = document.createElement("div");
  main.classList.add("main");
  document.body.appendChild(main);
  const container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);

  const container2 = document.createElement("div");
  container2.classList.add("container");
  main.appendChild(container2);

  const newBoard = Board();
  const newBoard2 = Board();

  let oneArray = newBoard.make2dArray(10, 10);
  let twoArray = newBoard2.make2dArray(10, 10);

  const patrol = Ship(2, "P");
  const cruiser = Ship(3, "C");
  const battleship = Ship(4, "B");

  newBoard.placeShip(patrol, 5, 0, "-y", oneArray);
  newBoard.placeShip(cruiser, 1, 0, "-y", oneArray);
  newBoard.placeShip(battleship, 0, 5, "x", oneArray);

  newBoard2.placeShip(patrol, 1, 1, "-y", twoArray);
  newBoard2.placeShip(cruiser, 3, 0, "-y", twoArray);
  newBoard2.placeShip(battleship, 2, 8, "x", twoArray);

  buildGameBoard(oneArray);
  buildGameBoard2(twoArray);

  function buildGameBoard(array) {
    container.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${50}px`;
        square.style.height = `${50}px`;
        square.id = [i, j];

        let mark = array[i][j];
        paintBoard(mark, square);
        container.append(square);
      }
    }
    const divs = document.querySelectorAll(".square");

    divs.forEach((sq) => sq.addEventListener("click", attack));
  }

  function buildGameBoard2(array) {
    container2.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${50}px`;
        square.style.height = `${50}px`;
        let mark = array[i][j];
        paintBoard(mark, square);
        container2.append(square);
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

  function attack(e) {
    newBoard.receiveAttack(
      Number(e.path[0].id[2]),
      Number(e.path[0].id[0]),
      oneArray
    );
    buildGameBoard(oneArray);

    newBoard2.receiveAttack(
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9),
      twoArray
    );
    buildGameBoard2(twoArray);

    e.stopPropagation();
  }
}

export { beginGame };

// newBoard2.receiveAttack(0, 0, twoArray);
// newBoard2.receiveAttack(0, 1, twoArray);
// newBoard2.receiveAttack(5, 5, twoArray);
// newBoard2.receiveAttack(9, 9, twoArray);
// newBoard2.receiveAttack(0, 5, twoArray);
// buildGameBoard2(twoArray);
