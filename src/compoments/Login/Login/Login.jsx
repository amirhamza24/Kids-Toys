// import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from "sweetalert2";
import { useState } from 'react';

const Login = () => {

    const { signIn, googleSign } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        signIn(email, passWord)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error);
            setError('Incorrect Email or Password');
        })
    }

    const handleGoogleSign = () => {
        googleSign()
        .then(result => {
            console.log(result.user)
            // navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error)
            Swal.fire(
                "Oops!",
                "Something went wrong!",
                "error"
            );
        })
    }
       


    return (
        <div>
            <div className='w-10/12 mx-auto mt-10'>
                <div>
                    <div className='flex justify-center items-center'>
                        <h2 className='font-style text-4xl mb-4 font-semibold capitalize'>Log in to your account...</h2>
                    </div>


                    <div className='border py-10 w-7/12 mx-auto mt-8'>
                        <form onSubmit={handleLogin}>
                            <div className="w-11/12 md:w-9/12 mx-auto space-y-4">

                                <div className='text-left'>
                                    <p className='text-red-500'>{}</p>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Enter Email:</p>
                                    </label>

                                    <input type="email" name='email' placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Enter password:</p>
                                    </label>

                                    <input type="password" name='password' placeholder="Enter Password" className="w-full px-4 py-2 focus:outline-none border rounded" required />

                                    <p className="text-left text-sm text-red-500"><small>Forget Password?</small></p>
                                </div>

                                <div className="form-control">
                                    <input type="submit" value="Login" className='h-10 bg-black text-white hover:bg-green-600 text-xl font-semibold cursor-pointer w-4/12 mx-auto'/>
                                </div>

                                {/* <button className="w-full h-10 bg-teal-300 hover:bg-teal-400 text-xl font-semibold">
                                    Login
                                </button> */}
            
                                <div className='flex items-center my-6 gap-3'>
                                    <span className='grow w-full h-[1px] bg-gray-300'></span>
                                    <span className='grow-0 font-semibold'>Or</span>
                                    <span className='grow mr-auto w-full h-[1px] bg-gray-300'></span>
                                </div>

                                <div className=''>
                                    <div className='flex flex-col md:flex-row items-center'>
                                        <div className='flex items-center justify-center space-x-2 border hover:border-gray-600 cursor-pointer w-3/5 md:w-2/5 mx-auto h-10 text-xl' onClick={handleGoogleSign}>
                                            <FaGoogle></FaGoogle>
                                            <p className='font-semibold text-gray-600'>Google</p>
                                        </div>

                                        <div className='flex items-center justify-center space-x-2 border hover:border-gray-600 cursor-pointer w-3/5 md:w-2/5 mx-auto h-10 text-xl'>
                                            <FaGithub></FaGithub>
                                            <p className='font-semibold text-gray-600'>Github</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className=''>Are you new here? <Link className='text-blue-600 hover:underline' to='/register'>Please Register.</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;