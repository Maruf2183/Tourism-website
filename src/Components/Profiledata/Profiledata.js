import axios from 'axios';
import React, { useState } from 'react';

const Profiledata = ({ data }) => {
    const { Name,serviceID
    } = data;

    /* const url = `http://localhost:5000/services/${serviceID}`; */

    const [destination, setDestination] = useState({});
    // axios.get(url).then(destinate => setDestination(destinate));
    console.log(destination);
    const {image, tittle, price, location, type, highlights } = destination;

    

    










    return (
        <div className='w-80 h-auto m-10 bg-green-900 p-3 rounded-lg text-white'>
            <p>prder placed by:{Name}</p>
            <div className='m-0'>
                <img src={image} alt="" />
                

            </div>
            <div className='m-0'></div>
        </div>


          
            


    );
};

export default Profiledata;