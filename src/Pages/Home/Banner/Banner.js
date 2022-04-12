import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mb-12 mt-4'>
            <img className='w-full rounded-lg' src="https://i.ibb.co/hYfmkdk/roel-IDh-TNLS6-HI-unsplash-1-1.jpg" alt="" />
            <div>
                <h1 className='text-3xl mb-4 text-amber-700'>Find Your Room At it's Best</h1>
                <p className='text-xl text-gray-700'>We will ensure Your Comfort, Safety and Security</p>
            </div>
        </div>
    );
};

export default Banner;