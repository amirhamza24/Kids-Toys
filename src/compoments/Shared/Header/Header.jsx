// import React from 'react';
import './Header.css'
import { FaPhone, FaUserAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import logo from "../../../assets/all/logo.jpg"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className='bg-[#333] text-white'>
                <div className='w-10/12 mx-auto'>
                    <div className='flex justify-between text-sm text-gray-400'>
                        <div className='flex space-x-8 border-l border-r border-gray-600'>
                            <div className='flex py-2 items-center ml-8 space-x-2 hover:text-[#61A321] hover:cursor-pointer'>
                                <FaPhone></FaPhone>
                                <p>(+1)123-456-7890</p>
                            </div>

                            <div className='flex items-center space-x-2 px-8 border-l border-gray-600 hover:text-[#61A321] hover:cursor-pointer'>
                                <HiMail className='text-lg'></HiMail>
                                <p>info@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex space-x-8 border-l border-r border-gray-600'>
                            <div className='flex py-2 items-center ml-8 space-x-2 hover:text-[#61A321] hover:cursor-pointer'>
                                <FaUserAlt></FaUserAlt>
                                <p>My Account</p>
                            </div>
                            
                            <div className='flex items-center space-x-2 px-8 border-l border-gray-600 hover:text-[#61A321] hover:cursor-pointer'>
                                <FaUserAlt></FaUserAlt>
                                <p>Setting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-b shadow-xl'>
                <div className='w-10/12 mx-auto py-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <Link to="/">
                                <img src={logo} alt="siteLogo" />
                            </Link>
                        </div>

                        <div className='flex items-center font-semibold text-lg'>
                            <div className='space-x-6'>
                                <Link to="/">Home</Link>
                                <Link to="/">Blog</Link>
                                <Link to="/">All Toys</Link>
                                <Link to="/">Add Toy</Link>
                                <Link to="/" className='pr-5'>My Toy</Link>
                            </div>

                            <div>
                                {
                                    user ? (
                                        <>
                                            <p className='cursor-pointer w-20 text-center h-8 border-2 border-gray-500' onClick={handleLogOut}>Logout</p>
                                        </>
                                    ) :
                                    <Link to="/login">
                                        Login
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;