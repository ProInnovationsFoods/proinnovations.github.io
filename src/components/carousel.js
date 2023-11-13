import './carousel.css';
import { Carousel } from 'react-bootstrap';

const CarouselImages = (props) => {
    const images = ['/1.jpg','/2.jpg','/3.jpg'];
    const interval = 4000;

    return (
        <div className='carousel' id='home'>
            <Carousel fade interval={interval}>
                {images.map((image) => {
                    return (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image}
                            alt="First slide"
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
      );
};

export default CarouselImages;
