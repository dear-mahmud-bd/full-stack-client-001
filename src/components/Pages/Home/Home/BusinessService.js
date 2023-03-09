import React from 'react';
import { MdBathtub } from 'react-icons/md';
import { BsGraphDownArrow } from 'react-icons/bs';
import { MdPrecisionManufacturing } from 'react-icons/md';
import ServiceDetails from './ServiceDetails';

const BusinessService = () => {
    const services = [
        {
            _id: 1,
            name: "The Best Plumbing Parts",
            description: "We provide the best plumbing parts since 2001. We provide all over the world.",
            img: <MdBathtub/>,
        },
        {
            _id: 2,
            name: "The Cheaper Plumbing Parsts",
            description: "We provide tools at very low cost based on customer needs.",
            img: <BsGraphDownArrow/>,
        },
        {
            _id: 3,
            name: "Customize Plumbing Parts",
            description: "We prepare the plumbing tools based on the customer's choice.",
            img: <MdPrecisionManufacturing/>,
        }
    ];
    return (
        <div className=' my-20'>
            <div className='text-center uppercase'>
                <h1 className='text-4xl mt-3'>Our company Provides</h1>
                <hr className='w-[50%] mx-auto'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12'>
                {
                    services.map(service => <ServiceDetails
                        key={service._id}
                        service={service}
                    ></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default BusinessService;