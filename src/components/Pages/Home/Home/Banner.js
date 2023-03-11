import React from 'react';
import { Link } from 'react-router-dom';
import Caru1 from '../../../assetes/slider1_slide1.jpg';

const Carusel = () => {
    return (
        <div className='mb-5 h-[550px]' style={{ background: `url(${Caru1})` }}>
            <div className="p-10 w-full text-gray-100 xl:col-span-2 bg-center" >
                <h1 className=" mt-20 md:mt-28 text-3xl md:text-5xl text-gray-100 leading-snug text-center min-h-33">
                    HIGH QUALITY PLUMBING SOLUTION
                </h1>
                <div className="mt-5 text-center">
                    <span className="text-2xl md:text-4xl">for your renovation needs </span>
                </div>
                <div className="mt-5 sm:mb-10 md:mb-15 lg:mb-20 flex justify-center ">
                    <span className="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
                        <Link to="/all-products">Our Collection</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Carusel;
