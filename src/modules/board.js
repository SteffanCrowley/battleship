import Ship from "./ship";

const Board = () => {
  function make2dArray(rows, cols) {
    let arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(cols);
    }
    return arr;
  }

  function placeShip(shipLength, startCol, startRow, direction, arr) {
    for (let i = 0; i < shipLength; i++) {
      arr[startRow][i + startCol] = "O";
    }
    console.log(arr);
    return arr;
  }
  function receiveAttack(col, row) {}

  return { make2dArray, placeShip };
};

export default Board;

// newBoard = Board();

// let oneArray = newBoard.make2dArray(5, 10);

// newBoard.placeShip(5, 2, 0, 10, oneArray);
