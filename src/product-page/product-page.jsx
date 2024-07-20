import React from "react";
import Title from "../title/title";
import Code from "../code/code";
import Gallery from "../gallery/gallery";
import FullPrice from "../full-price/full-price";
import Counter from "../counter/counter";
import Description from "../description/description";
import Comments from "../comments/comments";
import Popularity from "../popularity/popularity";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>
      <Code>{product.code}</Code>
      <div style={{ display: "flex" }}>
        <Gallery src={product.src} alt={product.name} />
        <div>
          <p>
            Цена:{" "}
            <FullPrice oldPrice={product.oldPrice} price={product.price} />
          </p>
          <div>
            Количество: <Counter />
          </div>
          <p>
            <span>Доставка:</span> {product.delivery}
          </p>
          <button type="button">Купить</button>
          <Popularity count={product.comments.length} />
        </div>
      </div>
      <Description text={product.description} />
      <Comments comments={product.comments} />
    </section>
  );
}

export default ProductPage;
