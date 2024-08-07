import React, { useState } from "react";
import Title from "../title/title";
import Code from "../code/code";
import Description from "../description/description";
import Comments from "../comments/comments";
import Popularity from "../popularity/popularity";
import { Image } from "/src/elements";
import Tabs from "/src/tabs/tabs";
import PopUp from "/src/popup/popup";
import Order from "/src/order/order";
import Accordion from "/src/accordion/accordion";
import {
  StyledProductPage,
  Header,
  ProductWrapper,
  ProductInfo,
  ProductInfoLine,
  PageCounter,
  BuyButton,
  PageFullPrice,
  DeliveryValue
} from "./styled";


function ProductPage({ product, showInfoInAccordion }) {
  const [productCount, setProductCount] = useState(1);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const price = product.price * productCount;
  const oldPrice = product.oldPrice * productCount;

  const tabs = [
    {
      title: "Описание",
      content: <Description text={product.description} />
    },
    {
      title: "Комментарии",
      content: <Comments comments={product.comments} />
    }
  ];

  return (
    <StyledProductPage>
      <Header>
        <Title>{product.name}</Title>
        <Code>{product.code}</Code>
      </Header>
      <ProductWrapper>
        <Image
            width="200"
            height="257"
            maxWidth="200"
            src={product.src}
            alt={product.name}
          />
        <ProductInfo>
          <ProductInfoLine>
            Цена:{" "}
            <PageFullPrice oldPrice={oldPrice} price={price} />
          </ProductInfoLine>
          <ProductInfoLine>
            Количество:{" "}
            <PageCounter value={productCount} onChange={setProductCount} minValue={1} />
          </ProductInfoLine>
          <ProductInfoLine>
            <span>Доставка:</span>{" "}
            <DeliveryValue>{product.delivery}</DeliveryValue>
          </ProductInfoLine>
          <BuyButton size="large" onClick={() => setIsShowPopup(true)}>Купить</BuyButton>
          <Popularity count={product.comments.length} />
        </ProductInfo>
      </ProductWrapper>
      {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
      <PopUp
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        title="Оформление"
      >
        <Order />
      </PopUp>
    </StyledProductPage>
  );
}

export default ProductPage;
