import React from 'react';

const Room = ({room}) => {
    const {type, picture, price} = room;
    return (
        <div className='flex relative'>
            <img className='w-full opacity-50 rounded' src={picture} alt="" />
            <div className='absolute top-6 right-0 left-0 text-center'>
            <p className='text-white text-3xl mb-4 bg-gray-500 py-2'>{type}</p>
            <p className='text-2xl text-gray-800 font-semibold'>${price}</p>
            <button className='bg-teal-600 text-white py-1 px-2 rounded mt-8'>View Details</button>
            </div>
        </div>
    );
};

export default Room;