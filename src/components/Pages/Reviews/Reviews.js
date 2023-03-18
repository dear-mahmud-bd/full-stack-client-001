import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`reviews.json`)
            .then(res => res.json())
            .then(data => setReviews(data))
    });
    return (
        <div className='my-5'>
            <div className='text-center uppercase'>
                <h1 className='text-4xl mt-3'>Customer Reviews</h1>
                <hr className='w-[50%] mx-auto' />
            </div>
            <div className='grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-12'>
                {
                    reviews.slice(0, 4).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <Link to='/reviews' className='flex item-center my-5'>
                <span className="px-3 font-bold text-gray-500 hover:text-white border-2 border-sky-500 rounded-md text-base hover:bg-sky-500 hover:border-sky-400 cursor-pointer mx-auto">
                    More Reviews
                </span>
            </Link>
        </div>
    );
};

export default Reviews;