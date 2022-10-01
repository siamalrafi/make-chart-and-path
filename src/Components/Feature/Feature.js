import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';


const Feature = ({ feature }) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='ml-2 text-green-200 h-6 w-6'> </CheckCircleIcon>
            <p className='ml-2'>{feature}</p>
           
        </div>
    );
};

export default Feature;