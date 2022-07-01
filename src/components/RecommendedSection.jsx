import React from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import product from '../assets/product.png'
import Button from './Button';
import ProductCard from './ProductCard';

const dummyProducts = [
  {
    imgSrc: product,
    name:"Avocado Body Butter 200ml",
    rating:4.5,
    shortDesc:"Untuk kulit kering",
    pack:"200ml",
    price:"Rp199.900",
  },
  {
    imgSrc: product,
    name:"Avocado Body Butter 200ml",
    rating:4.5,
    shortDesc:"Untuk kulit kering",
    pack:"200ml",
    price:"Rp199.900",
  },
  {
    imgSrc: product,
    name:"Avocado Body Butter 200ml",
    rating:4.5,
    shortDesc:"Untuk kulit kering",
    pack:"200ml",
    price:"Rp199.900",
  },
  {
    imgSrc: product,
    name:"Avocado Body Butter 200ml",
    rating:4.5,
    shortDesc:"Untuk kulit kering",
    pack:"200ml",
    price:"Rp199.900",
  },
  {
    imgSrc: product,
    name:"Avocado Body Butter 200ml",
    rating:4.5,
    shortDesc:"Untuk kulit kering",
    pack:"200ml",
    price:"Rp199.900",
  },
  {
    imgSrc: product,
    name:"Avocado Body Butter 200ml",
    rating:4.5,
    shortDesc:"Untuk kulit kering",
    pack:"200ml",
    price:"Rp199.900",
  },
  {
    imgSrc: product,
    name:"Avocado Body Butter 200ml",
    rating:4.5,
    shortDesc:"Untuk kulit kering",
    pack:"200ml",
    price:"Rp199.900",
  },
]

const RecommendedSection = () => {
  return (
    <section className="recommended-section">
      <Container>
        <div className="recommended-section__header">
          <h3>Rekomendasi Untukmu</h3>
          <a href="#"> Lihat Semua </a>
        </div>
        <div className="position-relative">
          <div className="recommended-section__slider">
            {dummyProducts?.map((product, idx) => (
              <ProductCard
                key={`product-${idx}`}
                imgSrc={product.imgSrc}
                name={product.name}
                rating={product.rating}
                shortDesc={product.shortDesc}
                pack={product.pack}
                price={product.price}
              />
            ))}
          </div>
          <Button className="recommended-section__slider-prev">
            <AiOutlineLeft />
          </Button>
          <Button className="recommended-section__slider-next">
            <AiOutlineRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default RecommendedSection;
