import React, { Component } from 'react';
import PurchaseButton from '../utils/PurchaseButton';
import Slide from 'react-reveal/Slide';

class Pricing extends Component {

    state = {
        prices: [100,150,250],
        position: ['General', 'Balcony', 'VIP'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non lorem vel lectus euismod lobortis non id arcu.',
            'Aliquam lacus mi, viverra at venenatis non, sagittis vitae ligula. Phasellus hendrerit tempor ex et egestas.',
            'Sed sagittis scelerisque purus, sit amet suscipit justo imperdiet in. Cras urna neque, accumsan sit amet consequat in, porttitor id elit. '
        ],
        link: [
            'http://ticketmaster.com',
            'http://stubhub.com',
            'http://google.com'
        ],
        transitionTime: [
            1500, 750, 1500
        ],
        transitionDirection: [
            [true, false, false],
            [false, true, false],
            [false, false, true]
        ]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Slide 
                left={this.state.transitionDirection[i][0]} 
                top={this.state.transitionDirection[i][1]} 
                right={this.state.transitionDirection[i][2]}  
                duration={this.state.transitionTime[i]}
            >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span class="font_major">${this.state.prices[i]}</span>
                            <span className="font_righteous">{this.state.position[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <p>{this.state.desc[i]}</p>
                        </div>
                        <div className="pricing_buttons">  
                            <PurchaseButton bck="#4374E0" link={this.state.link[i]}/>
                        </div>
                    </div>
                </div>
            </Slide>
            
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <div className="pricing_title_wrapper">
                    <div className="pricing_title_logo font_righteous">
                        the venue's
                    </div>
                    <div className="pricing_title_logo_tag font_cabin">
                        ticket <br/>options
                    </div>
                    </div>
                    

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;