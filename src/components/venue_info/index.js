import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {
    return (
        <div className="bck_black bck_parallax info_para">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                <Zoom duration={500}>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner inner_red">
                                <div className="vn_icon_square bck_red"></div>
                                <div
                                    className="vn_icon"
                                    style={{background: `url(${icon_calendar})`}}>
                                    
                                </div>
                                <div className="vn_title">
                                    Event Date &amp; Time
                                </div>
                                <div className="vn_desc">
                                <span className="font_righteous">halloween!</span><br/>October 31<sup>th</sup>, 2019<br/> Doors open @ 7pm
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom duration={500}> 
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner inner_yellow">
                                <div className="vn_icon_square bck_yellow"></div>
                                <div
                                    className="vn_icon"
                                    style={{background: `url(${icon_location})`}}>
                                    
                                </div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                    <span className="font_righteous">the venue</span><br/> 500 W42 St.<br/> New York, NY
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>   
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;