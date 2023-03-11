import React from 'react';
import Banner from './Banner';
import BusinessService from '../BusinessSummery/BusinessService';
import Products from '../../Products/Products';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <BusinessService />
            <Products />
        </div>
    );
};

export default Home;