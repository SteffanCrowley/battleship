import { buildGameBoard } from "./buildGameBoard";
import { buildGameBoard2 } from "./buildGameBoard";
import Board from "./board";
import Ship from "./ship";

function buildHeader() {
  const element = document.createElement("div");
  element.classList.add("header");
  element.innerHTML = "Battleship";
  document.body.appendChild(element);
}

function buildFooter() {
  const element = document.createElement("div");
  element.classList.add("footer");
  document.body.appendChild(element);
}

function build() {
  const newBoard = Board();
  const newBoard2 = Board();

  let oneArray = newBoard.make2dArray(10, 10);
  let twoArray = newBoard2.make2dArray(10, 10);

  const patrol = Ship(2, "P");
  const cruiser = Ship(3, "C");
  const battleship = Ship(4, "B");

  newBoard.placeShip(patrol, 0, 0, "-y", oneArray);
  newBoard.placeShip(cruiser, 1, 0, "-y", oneArray);
  newBoard.placeShip(battleship, 0, 5, "x", oneArray);

  newBoard2.placeShip(patrol, 1, 1, "-y", twoArray);
  newBoard2.placeShip(cruiser, 3, 0, "-y", twoArray);
  newBoard2.placeShip(battleship, 2, 8, "x", twoArray);

  newBoard.receiveAttack(0, 0, oneArray);
  newBoard.receiveAttack(0, 1, oneArray);
  newBoard.receiveAttack(5, 5, oneArray);
  newBoard.receiveAttack(9, 9, oneArray);
  newBoard.receiveAttack(0, 5, oneArray);

  newBoard2.receiveAttack(0, 0, twoArray);
  newBoard2.receiveAttack(0, 1, twoArray);
  newBoard2.receiveAttack(5, 5, twoArray);
  newBoard2.receiveAttack(9, 9, twoArray);
  newBoard2.receiveAttack(0, 5, twoArray);

  buildHeader();
  buildGameBoard(oneArray);
  buildGameBoard2(twoArray);
  buildFooter();
}

export { build };
