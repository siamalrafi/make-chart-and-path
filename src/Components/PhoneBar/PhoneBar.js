import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhoneBar = () => {
    const [phone, setPhone] = useState();
    useEffect(() => {
        const axios = require('axios');
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')

            .then(data => console.log(data))


    }, []);

    return (
        <div>

        </div>
    );
};

export default PhoneBar;