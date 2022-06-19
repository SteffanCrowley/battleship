import Ship from "../ship.js";
import Board from "../board";

test("Confirm the test described below", () => {
  const newBoard = Board();
  let oneArray = newBoard.make2dArray(10, 10);
  const patrol = Ship(2, "P");
  const cruiser = Ship(3, "C");
  const battleship = Ship(4, "B");

  newBoard.placeShip(patrol, 0, 0, "-y", oneArray);
  newBoard.placeShip(cruiser, 1, 0, "-y", oneArray);
  newBoard.placeShip(battleship, 2, 0, "-y", oneArray);

  newBoard.receiveAttack(5, 5, oneArray);

  expect(oneArray[5][5]).toBe("M");
});

//Make a board
//create 3 ships
//place 3 ships on the board (length 2,3,4)
//make 3 attacks
//sink a ship

test("test if ship is sunk", () => {
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

  expect(oneArray[1][0]).toBe("X");
});
