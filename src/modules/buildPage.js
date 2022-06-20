import { buildGameBoard } from "./buildGameBoard";
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
  let oneArray = newBoard.make2dArray(10, 10);
  const patrol = Ship(2, "P");
  const cruiser = Ship(3, "C");
  const battleship = Ship(4, "B");

  newBoard.placeShip(patrol, 0, 0, "-y", oneArray);
  newBoard.placeShip(cruiser, 1, 0, "-y", oneArray);
  newBoard.placeShip(battleship, 2, 0, "-y", oneArray);

  newBoard.receiveAttack(0, 0, oneArray);
  newBoard.receiveAttack(0, 1, oneArray);
  newBoard.receiveAttack(5, 5, oneArray);
  newBoard.receiveAttack(9, 9, oneArray);

  buildHeader();
  buildGameBoard(oneArray);
  buildFooter();
}

export { build };
