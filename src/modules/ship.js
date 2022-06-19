const Ship = (length, symbol) => {
  function getLength() {
    return length;
  }

  function getMark() {
    return symbol;
  }

  const tiles = new Array(length);

  // function isSunk() {
  //   for (let i = 0; i < length; i++) {
  //     if (tiles[i] !== "X") {
  //       break;
  //     }
  //     if (i == length - 1) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  function hit(hitCoord) {
    tiles[hitCoord] = "X";
  }

  return { getLength, hit, tiles, getMark };
};

export default Ship;
