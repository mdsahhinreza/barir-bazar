import React from 'react'
import Slider from './Slider'
import PickCategory from './PickCategory'
import '../../../Assets/css/Home.css';
import MostSelling from './MostSelling';

const Homepage = () => {
    return (
        <div>
            <Slider></Slider>
            <PickCategory></PickCategory>
            <MostSelling></MostSelling>
        </div>
    )
}

export default Homepage