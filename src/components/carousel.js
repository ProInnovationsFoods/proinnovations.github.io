import './carousel.css';
import { Carousel } from 'react-bootstrap';

export const CarouselImages = (props) => {
    const interval = 4000;

    return (
        <div className='carousel' id='home'>
            <Carousel fade interval={interval}>
                {props.images.map((image) => {
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
