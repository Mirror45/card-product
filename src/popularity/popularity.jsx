import React from "react";

function Popularity({ count }) {
  let result = null;

  if (count === 0) {
    result = <p>Be the first. Share your feedback</p>;
  }

  if (count > 4) {
    result = <p style={{ color: "green" }}>Verified product</p>;
  }
  return result;
}

export default Popularity;
