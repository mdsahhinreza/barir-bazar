import React from 'react'
import Slider from './Slider'
import PickCategory from './PickCategory'
import '../../../Assets/css/Home.css';
import MostSelling from './MostSelling';
import Featured from './Featured';
import CTA from './CTA';
import Ad from './Ad';

const Homepage = () => {
    return (
        <div>
            <Slider></Slider>
            <PickCategory></PickCategory>
            <MostSelling></MostSelling>
            <Featured></Featured>
            <CTA></CTA>
            <Ad></Ad>
        </div>
    )
}

export default Homepage