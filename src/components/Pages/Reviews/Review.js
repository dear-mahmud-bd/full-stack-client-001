import React from 'react';

const Review = ({review}) => {
    return (
        <div className="m-1 lg:max-w-lg bg-base-100 shadow-md cursor-pointer rounded-md">
            <figure className="px-10 pt-10 flex justify-center">
                <img src={review.picture} alt="" className=" w-16 rounded-full ring ring-[#06b6d4] ring-offset-base-100 ring-offset-2" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{review.name}</h2>
                <p>{review.message}</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                </div>
            </div>
        </div>
    );
};

export default Review;