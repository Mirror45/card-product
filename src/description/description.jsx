import React from "react";
import { DescriptionButton } from "./styled";

function Description({ text, onShowMore, isShowAllDescription }) {
  return (
    <>
      {text}
      <DescriptionButton onClick={onShowMore}>
        {isShowAllDescription ? "Hide" : "More details"}
      </DescriptionButton>
    </>
  );
}

export default Description;
