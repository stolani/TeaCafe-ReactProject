import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import {Carousel} from 'react-responsive-carousel';

function Home () {
  return (
    <div class="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
            <img src='/assets/images/tea-lover.jpg'/>
        </div>
        <div>
            <img src='/assets/images/tea-treats.jpg'/>
        </div>
        <div>
            <img src='/assets/images/tea-cup.jpg'/>
        </div>
    </Carousel>
</div>
);
}


    

export default Home;
