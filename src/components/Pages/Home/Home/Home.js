import React from 'react';
import Banner from './Banner';
import BusinessService from '../BusinessSummery/BusinessService';
import Products from '../../Products/Products';
import Reviews from '../../Reviews/Reviews';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <BusinessService />
            <Products />
            <Reviews/>
        </div>
    );
};

export default Home;