import React, { useEffect, useState } from 'react';
import Review from './Review';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`reviews.json`)
            .then(res => res.json())
            .then(data => setReviews(data))
    });
    return (
        <div className='my-5'>
            <div className='grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default AllReviews;