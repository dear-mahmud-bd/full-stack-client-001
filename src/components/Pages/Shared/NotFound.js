import React from 'react';
import { TbError404 } from 'react-icons/tb';

const NotFound = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <TbError404 className='text-[200px] md:text-[400px]' />
            <p className="text-xl text-headingColor font-semibold my-2">
                This Link is Not Available
            </p>
        </div>
    );
};

export default NotFound;