import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import PurchaseButton from '../utils/PurchaseButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd: 31
    }

    percentage() {
        if(this.state.discountStart<this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={()=>this.percentage()}
                    >
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets before July 1<sup>st</sup></h3>
                            <p>Donec nec suscipit leo. Mauris aliquet tincidunt augue, nec tincidunt urna. Cras sodales ultricies ligula sit amet auctor. Etiam sed felis eget dui vestibulum blandit ut at felis. Duis sed euismod erat.</p>
                            <PurchaseButton bck='red' link="http://google.com"/>
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;