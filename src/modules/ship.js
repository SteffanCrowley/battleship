const Ship = (length) => {
  function getLength() {
    return length;
  }

  const shipPos = new Array(length);

  function isSunk() {
    for (let i = 0; i < length; i++) {
      if (shipPos[i] !== "X") {
        break;
      }
      if (i == length - 1) {
        return true;
      }
    }
    return false;
  }

  function hit(hitCoord) {
    shipPos[hitCoord] = "X";
  }

  return { getLength, hit, isSunk };
};

export default Ship;

// const GameboardFactory = () => {};

// const enterprise = Ship(3);

// enterprise.hit(0);
// enterprise.hit(1);
// enterprise.hit(2);

// console.log(enterprise.isSunk());
