import React from "react";
import Price from "./price";
import OldPrice from "./old-price";

function FullPrice({ price, oldPrice }) {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <React.Fragment>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && " "}
      <Price value={price} />
    </React.Fragment>
  );
}

export default FullPrice;
