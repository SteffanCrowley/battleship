import { buildGameBoard } from "./buildGameBoard";

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
  buildHeader();
  buildGameBoard();
  buildFooter();
}

export { build };
