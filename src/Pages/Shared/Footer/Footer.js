import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear() + '';
    return (
        <footer className='fixed bottom-0 right-0 left-0 text-center mt-12 p-4'>
            <small className='text-center text-gray-500'>copyright collected © {year}</small>
        </footer>
    );
};

export default Footer;