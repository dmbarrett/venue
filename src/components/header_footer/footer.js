import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer className="bck_black">
            <Fade delat={500}>
                <div className="font_righteous footer_lego_venue">the venue</div>
                <div className="footer_copyright">
                    The Venue 2019. All Rights Reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;