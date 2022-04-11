import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear() + '';
    return (
        <footer className='text-center mt-12 p-4 text-gray-500'>
            <small>copyright collected © {year}</small>
        </footer>
    );
};

export default Footer;