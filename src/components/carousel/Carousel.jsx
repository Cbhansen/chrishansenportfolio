import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';


class MyCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2850&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1477244075012-5cc28286e465?auto=format&fit=crop&w=2734&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=2767&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default MyCarousel;