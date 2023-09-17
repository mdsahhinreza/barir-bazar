import React from 'react';

const PickCategory = () => {
    return (
        <div className='py-5'>
            <h2 className='text-center fw-bold ff-poppins pb-3'>Pick your <span className='ff-sscript secColor'>favorite</span> category</h2>
            <div className='container row m-auto'>
                <div className="col-2 px-4">
                    <div className='fCategory rounded bg-brand text-center py-4 gray'>
                        <i class="fa-solid fa-burger"></i>
                        <p className='m-0 ff-poppins'>Burger</p>
                    </div>
                </div>
                <div className="col-2 px-4">
                    <div className='fCategory rounded bg-brand text-center py-4 gray'>
                        <i class="fa-solid fa-pizza-slice"></i>
                        <p className='m-0'>Pizza</p>
                    </div>
                </div>
                <div className="col-2 px-4">
                    <div className='fCategory rounded bg-brand text-center py-4 gray'>
                        <i class="fa-solid fa-champagne-glasses"></i>
                        <p className='m-0'>Drinks</p>
                    </div>
                </div>
                <div className="col-2 px-4">
                    <div className='fCategory rounded bg-brand text-center py-4 gray'>
                        <i class="fa-solid fa-carrot"></i>
                        <p className='m-0'>Vagitable</p>
                    </div>
                </div>
                <div className="col-2 px-4">
                    <div className='fCategory rounded bg-brand text-center py-4 gray'>
                        <i class="fa-solid fa-lemon"></i>
                        <p className='m-0'>Fruit</p>
                    </div>
                </div>
                <div className="col-2 px-4">
                    <div className='fCategory rounded bg-brand text-center py-4 gray'>
                        <i class="fa-solid fa-fish"></i>
                        <p className='m-0'>Fish</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default PickCategory;