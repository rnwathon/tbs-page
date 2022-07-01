import React from "react";
import { Card } from "react-bootstrap";

import Button from "./Button";

const ProductCard = ({
  imgSrc,
  name,
  rating,
  shortDesc,
  pack,
  price
}) => {
  return (
    <Card className="product-card">
      <Card.Img
        className="product-card__img"
        src={imgSrc}
        alt="product thumbnail"
      />
      <Card.Body>
        <h5 className="product-card__name">{name}</h5>
        <div>{rating}</div>
        <h6 className="product-card__desc">{shortDesc}</h6>
        <h6 className="product-card__pack">{pack}</h6>
        <span className="product-card__price">{price}</span>
        <Button> Tambah ke Tas </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;