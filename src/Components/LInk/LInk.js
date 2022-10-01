import React from 'react';

const LInk = ({ route }) => {
    return (
        <div>
            <div>
                <li className='mr-5'>
                    <a href={route.path}>{route.name}</a>
                </li>
            </div>
        </div>
    );
};

export default LInk;