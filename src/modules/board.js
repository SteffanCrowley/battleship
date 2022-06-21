import Ship from "./ship";

const Board = () => {
  function make2dArray(rows, cols) {
    let arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(cols);
    }
    return arr;
  }

  function placeShip(ship, startCol, startRow, direction, arr) {
    if (direction == "x") {
      for (let i = 0; i < ship.getLength(); i++) {
        arr[startRow][i + startCol] = ship.getMark();
      }
      console.log(arr);
    } else if (direction == "-x") {
      for (let i = 0; i < ship.getLength(); i++) {
        arr[startRow][startCol - i] = ship.getMark();
      }
      console.log(arr);
    } else if (direction == "y") {
      for (let i = 0; i < ship.getLength(); i++) {
        arr[startRow - i][startCol] = ship.getMark();
      }
      console.log(arr);
    } else if (direction == "-y") {
      for (let i = 0; i < ship.getLength(); i++) {
        arr[startRow + i][startCol] = ship.getMark();
      }
      console.log(arr);
    }
  }

  function receiveAttack(col, row, arr) {
    if (arr[row][col] == "P") {
      arr[row][col] = "X";
      patrol--;
      isSunk(patrol, "patrol");
    } else if (arr[row][col] == "C") {
      arr[row][col] = "X";
      cruiser--;
      isSunk(cruiser, "cruiser");
    } else if (arr[row][col] == "B") {
      arr[row][col] = "X";
      battleship--;
      isSunk(battleship, "battleship");
    } else if (arr[row][col] == undefined) {
      arr[row][col] = "M";
    }
  }

  function isSunk(shipType, string) {
    if (shipType == 0) {
      console.log(string + " is sunk");
    }
  }

  let patrol = 2;
  let cruiser = 3;
  let battleship = 4;

  return { make2dArray, placeShip, receiveAttack };
};

export default Board;
