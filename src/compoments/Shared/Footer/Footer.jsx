// import React from 'react';
import './Footer.css'
import { HiMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter, FaYoutube, FaMapMarkerAlt  } from 'react-icons/fa';
import footerLogo from "../../../assets/all/logo-bgremove.png"

const Footer = () => {
    return (
        <div>
            <div>
            <footer className="bg-[#202020] text-white">
                <div className="w-10/12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left py-16">
                        <div className='space-y-4'>
                            <div className='flex justify-center md:justify-start'>
                                <img className='h-20 w-32' src={footerLogo} alt="" />
                            </div>

                            <div className='text-sm text-gray-200'>
                                <p>Contact us today and get a free consultation on any product we offer. Join our community for updates.</p>
                            </div>
                            
                            
                            <div className='flex justify-center md:justify-start space-x-2 text-white pt-3'>

                                <div className='cursor-pointer border w-8 h-8 rounded-full flex justify-center items-center hover:bg-violet-700 hover:border-violet-700'>
                                    
                                    <FaFacebookF className= ''></FaFacebookF>
                                </div>

                                <div className='cursor-pointer border w-8 h-8 rounded-full flex justify-center items-center hover:bg-violet-700 hover:border-violet-700'>
                                    <FaTwitter className=''></FaTwitter>
                                </div>

                                <div className='cursor-pointer border w-8 h-8 rounded-full flex justify-center items-center hover:bg-violet-700 hover:border-violet-700'>
                                    <FaInstagram className=''></FaInstagram>
                                </div>

                                <div className='cursor-pointer border w-8 h-8 rounded-full flex justify-center items-center hover:bg-violet-700 hover:border-violet-700'>
                                    <FaYoutube className=''></FaYoutube>
                                </div>
                            </div>
                        </div>

                        <div className="ml-0 lg:ml-12">
                            <h2 className="text-2xl font-bold">Information</h2>
                            <div className="flex flex-col space-y-2 mt-5">
                                <a className="link link-hover">Search</a>
                                <a className="link link-hover">About Us</a>
                                <a className="link link-hover">Contact Us</a>
                                <a className="link link-hover">Suppliers</a>
                                <a className="link link-hover">Advertisement</a>
                            </div>
                        </div>

                        <div className="ml-0 lg:ml-16">
                            <h2 className="text-2xl font-bold">our Support</h2>
                            <div className="flex flex-col space-y-2 mt-5">
                                <a className="link link-hover">Net Transaction</a>
                                <a className="link link-hover">My Account</a>
                                <a className="link link-hover">Privacy Policy</a>
                                <a className="link link-hover">Shipping Details</a>
                                <a className="link link-hover">Refunds and Returns</a>
                            </div>
                        </div>

                        <div className="ml-0 lg:ml-16">
                            <h2 className="text-2xl font-bold">Contact Us:</h2>
                            <div className="space-y-2 mt-5">
                                <div className='flex items-center space-x-2'>
                                    <FaMapMarkerAlt></FaMapMarkerAlt>
                                    <p>1203, Town Center Drive FL 33458</p>
                                </div>

                                <div className='flex items-center justify-center md:justify-start space-x-2'>
                                    <FaPhone></FaPhone>
                                    <p>+841 123 *** ***</p>
                                </div>

                                <div className='flex items-center justify-center md:justify-start space-x-2'>
                                    <HiMail className='text-lg'></HiMail>
                                    <p>info@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='border-1 border-gray-600 mb-8' />

                    <div className='pt-3 text-sm text-gray-200 text-center space-y-2 md:space-y-0 py-10'>
                        <div className=''>
                            <p>Copyright &copy; 2023, Powered By <span className='font-bold'>Kids Store</span>, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    );
};

export default Footer;