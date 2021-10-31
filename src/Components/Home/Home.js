import React from 'react';
import Slider from '../Carousol/components/Slider';
import Gides from '../Gides/Gides';
import HiringGide from '../HiringGide/HiringGide';
import './Home.css'

const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <Gides></Gides>
            <HiringGide></HiringGide>
        </div>
    );
};

export default Home;