import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import './Header.css';

const Header = () => {
    const { user, handleLogOut } = useFirebase();
    const [show, setShow] = useState(false);
    return (
        <header className='md:flex py-2 px-6 justify-between items-center text-base md:text-xl mb-0 md:mb-16'>
            <h1 className='md:text-2xl'>BookRoom</h1>
            <button onClick={() => setShow(!show)} className='absolute right-4 top-3 text-xl md:hidden z-10'><FiMenu className={!show && 'hidden'} /><IoClose className={show && 'hidden'} /></button>
            <nav className={`flex flex-col gap-2 md:flex-row md:gap-6 items-center md:translate-y-0 ${show?'-translate-y-64 transition-transform':'translate-y-0 transition-transform ease-out'}`}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About Us</NavLink>
                {
                    user?.uid ?
                        <button onClick={handleLogOut} className='bg-gray-600 p-1 rounded text-white text-base'>LogOut</button>
                        :
                        <>
                            <NavLink to='/register'>Register</NavLink>
                            <NavLink to='/login'>LogIn</NavLink>
                        </>
                }
            </nav>
        </header>
    );
};

export default Header;