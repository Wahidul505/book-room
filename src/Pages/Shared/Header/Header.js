import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex py-2 px-6 justify-between items-center text-xl'>
            <h1 className='text-2xl'>BookRoom</h1>
            <nav className='flex gap-6'>
                <Link to='/home'>Home</Link>
                <Link to='/review'>Review</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/login'>LogIn</Link>
            </nav>
        </header>
    );
};

export default Header;