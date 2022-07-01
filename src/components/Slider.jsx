import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import Button from './Button';


const Slider = () => {
  return (
    <Carousel className="w-full">
      <Carousel.Item>
        <div className="tbs-banner">
          <Container>
            <h2>HIMALAYAN CHARCOAL</h2>
            <p>
              If you haven’t heard the charcoal hype, our Benefits of Charcoal
              cheat sheet will bring you up to speed.
            </p>
            <Button> Selengkapnya </Button>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
