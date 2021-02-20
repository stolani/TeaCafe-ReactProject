import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import {Carousel} from 'react-responsive-carousel';

function Home () {
  return (
    <div class="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
            <img src='/assets/images/tea-lover.jpg'/>
            <h3>Welcome home tea lovers</h3>
        </div>
        <div>
            <img src='/assets/images/tea-treats.jpg'/>
            <h3>We bake delicious treats everyday</h3>
        </div>
        <div>
            <img src='/assets/images/tea-cup.jpg'/>
            <h3>Choose from a wide variety of tea products</h3>
        </div>
    </Carousel>
</div>
);
}


    

export default Home;
