import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1148791906303!2d-73.99804924867203!3d40.75949797922538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2584d9e097d1d%3A0xd976f05700f43eb8!2s500+W+42nd+St%2C+New+York%2C+NY+10036!5e0!3m2!1sen!2sus!4v1555449306302!5m2!1sen!2sus" 
                    width="100%" 
                    height="500px" 
                    frameBorder="0" 
                    allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;