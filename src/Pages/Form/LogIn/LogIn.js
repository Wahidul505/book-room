import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const LogIn = () => {
    const { handleLogIn,handleGoogleSignIn, setEmail, setPassword, error} = useFirebase();
    return (
        <div className='flex flex-col gap-6 w-1/2 mx-auto md:w-1/3 bg-amber-200 rounded-lg p-4'>
            <h1 className='text-center text-3xl'>Log In</h1>
            <form onSubmit={handleLogIn} className='flex flex-col gap-4'>
                <input onChange={(e) => setEmail(e.target.value)} className='px-2 py-1' type="email" name="" required placeholder='Your Email' />
                <input onChange={(e) => setPassword(e.target.value)} className='px-2 py-1' type="password" name="" required placeholder='Password' />
                {
                    error && <p className='text-sm text-red-600'>{error}</p>
                }
                <input className='bg-gray-600 px-2 py-1 rounded text-white text-xl cursor-pointer' type="submit" value="Log In" />
                <p className='text-sm text-gray-600'>New to Book Room? | <Link className='text-orange-500' to='/register'>Register</Link></p>
                <div className='flex gap-4 items-center'>
                    <div className='w-full bg-gray-500 h-1 rounded-xl'></div>
                    <p className='text-lg'>or</p>
                    <div className='w-full bg-gray-500 h-1 rounded-xl'></div>
                </div>
            </form>
            <button onClick={handleGoogleSignIn} className='bg-gray-600 px-2 py-1 rounded text-white text-xl flex items-center justify-center gap-4'><FcGoogle className='text-2xl' />Google SignIn</button>
        </div>
    );
};

export default LogIn;