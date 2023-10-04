import { IconEye } from '@tabler/icons-react';
import React from 'react';
import shopbg from '../../Assets/images/momo.png';
import shopprofile from '../../Assets/images/shopprofile.png';

const ShopHeader = () => {
    return (
        <div className='position-relative '>
            <img width={100} className='img-fluid w-100' src={shopbg} alt="" />
            <div className='position-absolute bottom-0 bg-light bg-opacity-50    d-flex justify-content-between align-items-center w-100 px-5 py-3'>
                <div className="d-flex align-items-center gap-4">
                    <img height={80} className='rounded-circle' src={shopprofile} alt="" />
                    <div>
                        <h3 className='m-0'>Momo Bistro</h3>
                        <p className='m-0'>Mirpur 10, Dhaka</p>
                    </div>
                </div>
                <p className='bg-warning bg-opacity-50 rounded-5 p-3 m-0'><IconEye></IconEye></p>
            </div>
        </div>
    );
};

export default ShopHeader;