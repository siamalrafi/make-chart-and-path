import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: ['Everything is Feature',
                'Awesome Feature',
                'Extra Feature', 'Unnecessary feature', 'Will never use Feature', 'Human feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.990, features: ['Everything is Free',
                'Awesome Feature',
                'Extra Feature', 'Unnecessary feature', 'Will never use Feature', 'Human feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: ['Everything is Premium',
                'Awesome Feature',
                'Extra Feature', 'Unnecessary feature', 'Will never use Feature', 'Human feature'
            ]
        }
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-500 p-3 w-full text-white'>Best Deal With </h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {pricingOptions.map(option => <PricingOptions

                    key={option.id}
                    option={option}
                >
                </PricingOptions>)}
            </div>
        </div>
    );
};

export default Pricing;