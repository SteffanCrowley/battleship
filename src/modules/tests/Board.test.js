import Board from "../board";

test("Creates board and is expected length", () => {
  const newBoard = Board();
  expect(newBoard.make2dArray(2, 3).length).toBe(2);
});
