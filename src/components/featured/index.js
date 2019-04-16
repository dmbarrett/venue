import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';

import Fade from 'react-reveal/Fade'
const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

            <Carousel />
            <div className="artist_name">
                <div className="font_major wrapper" id="wrapper">
                    Ariana Grande
                </div>
            </div>
            <Fade duration={5000} left>
                <div className="countdown_title font_major">
                    ariana's next event @ <span className="font_righteous countdown_title_logo">the venue</span>
                </div>
                <Countdown date={new Date("2019-10-31T19:00:00Z")} />
            </Fade>            
        </div>
    );
};

export default Featured;