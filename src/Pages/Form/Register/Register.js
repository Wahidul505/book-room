import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const {setEmail, setPassword, setConfirmPassword, handleRegister, handleGoogleSignIn} = useFirebase();
    return (
        <div className='flex flex-col gap-6 w-1/2 mx-auto md:w-1/3 bg-amber-200 rounded-lg p-4'>
            <h1 className='text-center text-3xl'>Register</h1>
            <form onSubmit={handleRegister} className='flex flex-col gap-4'>
                <input className='px-2 py-1' type="text" name="name" required placeholder='Your Name' />
                <input onChange={(e)=>setEmail(e.target.value)} className='px-2 py-1' type="email" name="email" required placeholder='Your Email'/>
                <input onChange={(e)=>setPassword(e.target.value)} className='px-2 py-1' type="password" name="password" required placeholder='Password' />
                <input onChange={(e)=>setConfirmPassword(e.target.value)} className='px-2 py-1' type="password" name="confirm_password" required placeholder='Confirm Password' />
                <input className='bg-gray-600 px-2 py-1 rounded text-white text-xl cursor-pointer' type="submit" value="Sign Up" />
                <p className='text-sm text-gray-600'>Already have an Account? | <Link className='text-orange-500' to='/login'>LogIn</Link></p>
                <div className='flex gap-4 items-center'>
                    <div className='w-full bg-gray-500 h-1 rounded-xl'></div>
                    <p className='text-lg'>or</p>
                    <div className='w-full bg-gray-500 h-1 rounded-xl'></div>
                </div>
            </form>
            <button onClick={handleGoogleSignIn} className='bg-gray-600 px-2 py-1 rounded text-white text-xl flex items-center justify-center gap-4'><FcGoogle className='text-2xl'/>Google SignIn</button>
        </div>
    );
};

export default Register;