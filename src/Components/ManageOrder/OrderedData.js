import React from 'react';

const OrderedData = ({ data }) => {
    const {Name,address,phone,city,productId} = data;



    return (
        <div className='p-3'>


            <div className="w-full bg-blue-300 rounded sahdow-lg flex flex-col  lg:flex-row sm:flex-col items-center">
                <div className="w-full lg:w-2/4  lg:h-80">
                    <img className="object-center object-cover rounded  h-full w-full lg:h-full lg:w-full" src='' alt={`thi sis a card images`} />

                </div>
                <div className="text-left  text-xs  w-full p-4 h-full px-2 lg:w-2/4 lg:h-full overflow-hidden lg:text-sm bg-blue-300 lg:mx-4">
                    <h2 className=" text-blue-700  mb-1 max-w-xs	"> Cuctomer info</h2>
                    <h5 className=""> <span>{productId}</span> </h5>
                    <p>{Name}</p>
                    <p>{city}</p>
                    <p>{address}</p>
                    <p>{phone}</p>
                   
                    <button class="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-8 rounded">
                        Accept
                    </button>
                    <button class="bg-red-500 hover:bg-red-700 mx-4 text-white font-bold py-2 px-8 rounded">
                        Cencel
                    </button>

                </div>
            </div>


        </div>
    );
};

export default OrderedData;