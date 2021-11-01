
import axios from 'axios';
import React, { useEffect, useState, } from 'react';
import useAuth from '../../Hook/useAuth';


const Profile = () => {
    const { user, isloading } = useAuth();
    const { email } = user;
    const [bookedData, setBookedData] = useState([]);

    const { displayName, photoURL } = user;
    
    const dynamicUrl = `http://localhost:5000/booking?email=${email}`

    useEffect(() => {
        if (!isloading) {
            axios.get(dynamicUrl).then(data =>setBookedData(data.data))
        };
    }, [isloading]);
    console.log(bookedData);












    return (
        <div className='p-12' >
            <div className=' h-screen bg-green-900 flex flex-col lg:flex-row gap-3 items-center content-center  justify-center p-10'>
                <div className='h-80  bg-gray-100 text-black w-full flex flex-col  item-center content-center p-10 '>
                    <img className='rounded-full w-40 h-40 mx-auto' src={photoURL} alt="" />
                    <h2 className='text-green-200' >{displayName}</h2>
                </div>
                <div className='h-full bg-blue-100 w-full'>


                    <h2>order history</h2>
                    {
                       bookedData.map(data=>console.log(data))


                        
                        
                    }
                    



                </div>
            </div>






        </div>
    );
};

export default Profile;