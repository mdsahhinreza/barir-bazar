import React from 'react';

const CTA = () => {
    return (
        <div className='bg-dark'>
            <div className="container d-flex  justify-content-between align-items-center py-5">
                <div>
                    <h4 className='m-0 text-light'>Check Out Our</h4>
                    <h1 className='display-2 fw-bold text-warning m-0'>20% OFF</h1>
                    <h4 className='m-0 text-light'>Check Out Our</h4>
                </div>
                <div>
                    <button className='btn btn-warning px-5'>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default CTA;