import React from 'react';
import cardImage from '../../../Assets/images/product.png';
import pizza from '../../../Assets/images/pizza.jpg';
import { IconEye, IconHeart, IconHeartFilled, IconShoppingCart, IconStarFilled } from '@tabler/icons-react';

const ProductCard = () => {
    return (
        <div className="card">
            <div className="position-relative">
                <img src={cardImage} className="card-img-top" alt="..."/>
                <div className="position-absolute productCard d-flex gap-2">
                    <button className='btn btn-warning p-2 rounded-circle '><IconEye></IconEye></button>
                    <button className='btn btn-warning p-2 rounded-circle '><IconShoppingCart></IconShoppingCart></button>
                    <button className='btn btn-warning p-2 rounded-circle '><IconHeart></IconHeart></button>
                </div>
            </div>
                <div className="card-body">
                    <div className='d-flex justify-content-between '>
                        <h5 className="card-title">Awesome Pizza</h5>
                        <p className='text-danger'>20 <IconHeartFilled></IconHeartFilled></p>
                    </div>
                    <div className="d-flex gap-3">
                        <img className='rounded-circle' height={50} src={pizza} alt="Pizza hut" />
                        <div>
                            <h5 className='m-0'>Pizza Hut</h5>
                            <div>
                                <IconStarFilled className='text-warning' size={18}></IconStarFilled>
                                <IconStarFilled className='text-warning' size={18}></IconStarFilled>
                                <IconStarFilled className='text-warning' size={18}></IconStarFilled>
                                <IconStarFilled className='text-warning' size={18}></IconStarFilled>
                                <IconStarFilled className='text-warning' size={18}></IconStarFilled>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className='align-items-center pt-2'>Price: 450 BDT</p>
                        <a href="#" className="btn btn-secondary">Buy Now</a>
                    </div>
                </div>
        </div>
    );
};

export default ProductCard;