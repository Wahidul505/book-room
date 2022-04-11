import React from 'react';

const ReviewItem = ({room}) => {
    const {type, picture, price} = room;
    return (
        <div className='p-6 flex flex-col gap-2'>
            <img className='w-full' src={picture} alt="" />
            <h1 className='text-4xl text-gray-600'>{type}</h1>
            <p className='text-2xl text-teal-600'>Price: {price}</p>
        </div>
    );
};

export default ReviewItem;