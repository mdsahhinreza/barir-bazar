import React from 'react';
import ad1 from '../../../Assets/images/ad1.png';
import ad2 from '../../../Assets/images/ad2.png';
import ad3 from '../../../Assets/images/ad3.png';

const Ad = () => {
    return (
        <div className='py-5'>
            <div className="container d-flex gap-4">
                <div>
                    <img height={600} width={600} src={ad1} alt="" />
                </div>
                <div className='d-flex flex-column gap-4'>
                    <img height={285} width={555} src={ad2} alt="" />
                    <img height={285} width={555} src={ad3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Ad;