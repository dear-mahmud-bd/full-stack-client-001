import React from 'react';
import { motion } from "framer-motion";
import { MdProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineStock } from 'react-icons/ai';

const Product = ({ product }) => {

    return (
        <>
            <div className="w-300 md:w-[298px] xl:w-375 cursor-pointer h-auto bg-base-100 rounded-lg py-2 my-4 md:my-9 shadow-md hover:drop-shadow-2xl duration-500 mx-2">
                <div className='w-full flex flex-col items-center justify-center'>
                    <img src={product.img} alt="" className='w-40'/>
                    <p className="text-sky-600 font-semibold text-lg md:text-xl">{product.name}</p>
                </div>
                <p className=" text-center m-2 text-sm">{product.description}</p>
                <div className='w-full flex items-center justify-between px-2'>
                    <div>
                        <p className='text-[12px] lg:text-sm mt-1 font-semibold text-gray-500 flex items-center gap-2 ml-auto'>
                            <span className='text-sky-600 text-2xl font-semibold'><MdProductionQuantityLimits /></span>
                            <span>Minimum Order: <br />{product.minorder} piece</span>
                        </p>
                        <motion.button whileTap={{ scale: 0.90 }} className="m-1 p-2 px-6 bg-sky-500 text-white rounded-md hover:bg-sky-600">Order</motion.button>
                    </div>
                    <div className='ml-2'>
                        <p className="mt-1 font-medium text-gray-500 flex items-center gap-2 ml-auto">
                            <span className='text-sky-600 text-2xl font-semibold'><AiOutlineStock /></span>
                            <span className=' mt-1 text-sm text-gray-500'>Available Stock: <span className='font-semibold'>{product.stock}</span> pieces</span>
                        </p>
                        <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold '>Price per piece-</p>
                        <div className="flex items-center gap-8">
                            <p className="text-lg text-heaingColor font-bold"><span className=' text-lg text-sky-600'>$</span> {product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;