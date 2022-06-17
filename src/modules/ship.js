const Ship = (length) => {
  function getLength() {
    return length;
  }

  const tiles = new Array(length);

  function isSunk() {
    for (let i = 0; i < length; i++) {
      if (tiles[i] !== "X") {
        break;
      }
      if (i == length - 1) {
        return true;
      }
    }
    return false;
  }

  function hit(hitCoord) {
    tiles[hitCoord] = "X";
  }

  return { getLength, hit, isSunk, tiles };
};

export default Ship;
