import React from 'react';
import Feature from '../Feature/Feature';

const PricingOptions = ({ option }) => {
    const { features } = option;


    return (
        <div className='bg-indigo-300 m-3 rounded p-3'>
            <h2><span className='text-6xl font-bold text-white'>{option.price}
            </span><span className='text-2xl text-gray-200'>/mon</span></h2>
            <h1 className='text-2xl my-2'>{option.name}</h1>
            {
                features.map((feature, idx) => <Feature
                    feature={feature}
                    key={idx}
                ></Feature>)
            }

            <button className='hover:bg-violet-600 mt-3 w-full font-bold rounded bg-green-600 py-2 text-2xl text-white'>Buy Now</button>
        </div>
    );
};

export default PricingOptions;