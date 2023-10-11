// import React from 'react';
import './Footer.css'
import { HiMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter, FaYoutube, FaMapMarkerAlt  } from 'react-icons/fa';
import footerLogo from "../../../assets/all/logo-bgremove.png"
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import footerTop from '../../../assets/all/footerPosition.jpg'

const Footer = () => {
    return (
        <div>
            <div>
            <footer className="bg-[#202020] text-zinc-400 relative">
                <div className="w-10/12 mx-auto">
                    <div className='relative'>
                        <img className='' src={footerTop} alt="" />

                        <div className=''>
                            <div className='w-10/12 mx-auto absolute top-12 left-24 flex items-center justify-between text-white para-font'>
                                <input className='px-4 py-2 w-6/12 focus:outline-none rounded bg-[#79b744] placeholder-white' type="email" placeholder='Enter Your Email...' />

                                <div className='flex items-center space-x-3'>
                                    <p className='font-semibold text-xl tracking-wider uppercase title-font'>Social Connect</p>
                                    <div className='flex items-center space-x-3'>
                                        <div className='bg-[#79b744] w-9 h-9 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer'>
                                            <FaFacebookF className=''></FaFacebookF>
                                        </div>

                                        <div className='bg-[#79b744] w-9 h-9 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer'>
                                            <FaTwitter className=''></FaTwitter>
                                        </div>

                                        <div className='bg-[#79b744] w-9 h-9 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer'>
                                            <FaInstagram className=''></FaInstagram>
                                        </div>

                                        <div className='bg-[#79b744] w-9 h-9 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer'>
                                            <FaYoutube className=''></FaYoutube>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left py-16">
                        <div className='space-y-4'>
                            <div className='flex justify-center md:justify-start'>
                                <img className='h-20 w-32' src={footerLogo} alt="" />
                            </div>

                            <div className='text-sm text-zinc-400'>
                                <p>Contact us today and get a free consultation on any product we offer. Join our community for updates.</p>
                            </div>
                            
                            
                            <div className='flex justify-center md:justify-start space-x-2 text-white pt-3'>

                                <div className='cursor-pointer border w-8 h-8 rounded-full flex justify-center items-center hover:bg-lime-600 hover:border-lime-600'>
                                    <FaFacebookF className= ''></FaFacebookF>
                                </div>

                                <div className='cursor-pointer border w-8 h-8 rounded-full flex justify-center items-center hover:bg-lime-600 hover:border-lime-600'>
                                    <FaTwitter className=''></FaTwitter>
                                </div>

                                <div className='cursor-pointer border w-8 h-8 rounded-full flex justify-center items-center hover:bg-lime-600 hover:border-lime-600'>
                                    <FaInstagram className=''></FaInstagram>
                                </div>

                                <div className='cursor-pointer border w-8 h-8 rounded-full flex justify-center items-center hover:bg-lime-600 hover:border-lime-600'>
                                    <FaYoutube className=''></FaYoutube>
                                </div>
                            </div>
                        </div>

                        <div className="ml-0 lg:ml-12">
                            <h2 className="text-2xl font-bold text-white">Information</h2>
                            <div className="flex flex-col space-y-2 mt-5">
                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">Search</span>
                                </a>

                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">About Us</span>
                                </a>

                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">Contact Us</span>    
                                </a>

                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">Suppliers</span>
                                </a>

                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">Advertisement</span>
                                </a>
                            </div>
                        </div>

                        <div className="ml-0 lg:ml-16">
                            <h2 className="text-2xl font-bold text-white">Our Support</h2>
                            <div className="flex flex-col space-y-2 mt-5">
                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">Net Transaction</span>
                                </a>
                                
                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">My Account</span>
                                </a>

                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">Privacy Policy</span>                                
                                </a>

                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">Shipping Details</span>
                                </a>

                                <a className="hover:text-white cursor-pointer flex items-center space-x-2">
                                    <MdOutlineArrowForwardIos className='text-white'></MdOutlineArrowForwardIos> 
                                    <span className="duration-200 hover:translate-x-3">Refunds and Returns</span>
                                </a>
                            </div>
                        </div>

                        <div className="ml-0 lg:ml-16">
                            <h2 className="text-2xl font-bold text-white">Contact Us:</h2>
                            <div className="space-y-4 mt-5">
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
                            <p>Copyright &copy; 2023, Powered By <span className='font-bold'>Kids Toys</span>, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    );
};

export default Footer;