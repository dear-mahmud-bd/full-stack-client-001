import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-md hover:drop-shadow-2xl duration-500 cursor-pointer">
            <figure className="px-10 pt-10">
                <p className='text-8xl'>{service.img}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;