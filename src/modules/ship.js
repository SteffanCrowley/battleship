const Ship = (length, symbol) => {
  function getLength() {
    return length;
  }

  function getMark() {
    return symbol;
  }

  const lifePoints = length;

  function isSunk(lifePoints) {
    if (lifePoints == 0) {
      console.log(symbol + " is sunk!");
    }
  }

  function hit() {
    lifePoints--;
    isSunk(lifePoints);
  }

  return { getLength, hit, getMark };
};

export default Ship;
