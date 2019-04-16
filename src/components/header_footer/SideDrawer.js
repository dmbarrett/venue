import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        })
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=>props.onClose(false)}
        >
            <List component="nav" className="side_nav">
                <ListItem className="side_nav_title">
                    <p className="font_righteous">the venue</p>
                </ListItem>
                <ListItem button className="side_nav_li special_hover" onClick={()=>scrollToElement('featured')}>
                    <p>Event Starting In</p>
                </ListItem>
                <ListItem className="side_nav_li special_hover" button onClick={()=>scrollToElement('venue')}>
                    <p>Venue Info</p>
                </ListItem>
                <ListItem className="side_nav_li special_hover" button onClick={()=>scrollToElement('highlights')}>
                    <p>Highlights</p>
                </ListItem>
                <ListItem className="side_nav_li special_hover" button onClick={()=>scrollToElement('pricing')}>
                    <p>Pricing</p>
                </ListItem>
                <ListItem className="side_nav_li special_hover" button onClick={()=>scrollToElement('location')}>
                    <p>Location</p>
                </ListItem>
                <ListItem>
                    <p className="font_righteous" style={{textTransform: 'lowercase'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non lorem vel lectus euismod lobortis non id arcu. Aliquam dapibus porttitor ullamcorper. Nam accumsan cursus tortor eget laoreet. Quisque non dapibus magna. Etiam rhoncus nec nisi eu pellentesque. Nunc ligula urna, varius et quam vel, rutrum cursus felis. Suspendisse vitae orci non urna cursus placerat. Etiam egestas, diam et volutpat porta, risus nibh scelerisque metus, nec euismod ligula velit at tellus. Duis ut eros turpis. Vestibulum ornare ex lectus, et laoreet dui facilisis et.</p>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;