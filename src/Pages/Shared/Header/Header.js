import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, handleLogOut} = useFirebase();
    return (
        <header className='md:flex py-2 px-6 justify-between items-center text-base md:text-xl mb-16'>
            <h1 className='md:text-2xl'>BookRoom</h1>
            <nav className='flex gap-3 md:gap-6 flex-col md:flex-row text-center'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About Us</Link>
                {
                    user?.uid ?
                        <button onClick={handleLogOut} className='bg-gray-600 p-1 rounded text-white text-base'>LogOut</button>
                        :
                        <>
                            <Link to='/register'>Register</Link>
                            <Link to='/login'>LogIn</Link>
                        </>
                }
            </nav>
        </header>
    );
};

export default Header;