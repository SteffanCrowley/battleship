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
    if (direction == "x") {
      for (let i = 0; i < shipLength; i++) {
        arr[startRow][i + startCol] = "O";
      }
      console.log(arr);
    } else if (direction == "-x") {
      for (let i = 0; i < shipLength; i++) {
        arr[startRow][startCol - i] = "O";
      }
      console.log(arr);
    } else if (direction == "y") {
      for (let i = 0; i < shipLength; i++) {
        arr[startRow - i][startCol] = "O";
      }
      console.log(arr);
    } else if (direction == "-y") {
      for (let i = 0; i < shipLength; i++) {
        arr[startRow + i][startCol] = "O";
      }
      console.log(arr);
    }
  }
  function receiveAttack(col, row, arr) {
    if (arr[row][col] == "O") {
      arr[row][col] = "X";
    } else if (arr[row][col] == undefined) {
      arr[row][col] = "M";
    }
  }

  return { make2dArray, placeShip, receiveAttack };
};

export default Board;

// newBoard = Board();

// let oneArray = newBoard.make2dArray(10, 10);

// newBoard.placeShip(5, 0, 0, "-y", oneArray);

// newBoard.placeShip(5, 1, 0, "-y", oneArray);

// newBoard.placeShip(5, 2, 0, "-y", oneArray);
