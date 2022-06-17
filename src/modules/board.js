import Ship from "./ship";

const Board = () => {
  function make2dArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  return { make2dArray };
};

export default Board;

// newBoard = Board();

// newBoard.make2dArray(10, 10);
