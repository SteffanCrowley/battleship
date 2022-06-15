const ShipFactory = (length) => {
  const getLength = () => length;
  const shipPos = new Array(length);

  const isSunk = () => {
    for (let i = 0; i < length; i++) {
      if (shipPos[i] !== "X") {
        break;
      }
      if (i == length - 1) {
        return "dead";
      }
    }
    return "alive";
  };

  const hit = (hitCoord) => {
    shipPos[hitCoord] = "X";
  };

  return { getLength, hit, isSunk };
};

const enterprise = ShipFactory(5);

console.log(enterprise.getLength());

enterprise.hit(4);
enterprise.hit(3);
enterprise.hit(2);
enterprise.hit(1);
enterprise.hit(0);

console.log(enterprise.isSunk());
