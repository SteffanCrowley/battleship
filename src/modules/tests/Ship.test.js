import Ship from "../ship.js";

test("has length property", () => {
  const ship1 = Ship(4, "B");
  expect(ship1.getLength()).toBe(4);
});

// test("creates ship tiles", () => {
//   const pinta = Ship(4, "B");
//   expect(pinta.tiles).toEqual([undefined, undefined, undefined, undefined]);
// });

// test("hits the ship", () => {
//   let ship1 = Ship(4, "B");
//   ship1.hit(0);
//   expect(ship1.tiles[0]).toEqual("X");
// });

// test("sinks the ship", () => {
//   const enterprise = Ship(3, "C");
//   enterprise.hit(0);
//   enterprise.hit(1);
//   enterprise.hit(2);
//   expect(enterprise.isSunk()).toBe(true);
// });

// test("sinks the ship", () => {
//   const nina = Ship(3, "C");
//   nina.hit(0);
//   nina.hit(1);
//   expect(nina.isSunk()).toBe(false);
// });
