import Board from "../board";

test("Creates board and is expected length", () => {
  const newBoard = Board();
  expect(newBoard.make2dArray(2, 3).length).toBe(2);
});

test("Place ship on board", () => {
  const newBoard = Board();
  let oneArray = newBoard.make2dArray(5, 10);
  let secArray = newBoard.placeShip(5, 2, 0, "x", oneArray);
  expect(secArray[0][4]).toBe("O");
});

test("test an area that does NOT have ship", () => {
  const newBoard = Board();
  let oneArray = newBoard.make2dArray(5, 10);
  let secArray = newBoard.placeShip(5, 2, 0, "x", oneArray);
  expect(secArray[1][4]).toBe(undefined);
});

test("test placement of ships", () => {
  const newBoard = Board();
  let oneArray = newBoard.make2dArray(10, 10);
  newBoard.placeShip(5, 0, 0, "-y", oneArray);
  newBoard.placeShip(5, 1, 0, "-y", oneArray);
  newBoard.placeShip(5, 2, 0, "-y", oneArray);
  expect(oneArray[1][1]).toBe("O");
});
