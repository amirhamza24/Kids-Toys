// import React from 'react';
import './Deals.css'
import todays from '../../../../assets/all/gallery/today-deal.jpg';
import { FaRegClock } from 'react-icons/fa';
import hot1 from "../../../../assets/all/gallery/hot1.jpg"
import hot2 from "../../../../assets/all/gallery/hot2.jpg"
import hot3 from "../../../../assets/all/gallery/hot3.jpg"
import hot4 from "../../../../assets/all/gallery/hot4.jpg"

const Deals = () => {
    return (
        <div>
            <div className='mb-10 mt-10 w-10/12 mx-auto'>
                <div className='flex gap-10'>
                    <div className='w-4/12'>
                        <div className="">
                            <div>
                                <h2 className='text-2xl font-bold title-font'>Today Deals</h2>
                            </div>
                            <p className='my-3 border-b'></p>
                            
                            <div className='space-y-4'>
                                <img className='mt-5 border' src={todays} alt="" />

                                <p className='para-font font-semibold'>Suscipit, posuere a, pede.</p>

                                <p className='space-x-3'>
                                    <span className='text-lg text-lime-600 font-semibold'>$22.79</span>
                                    <del className='text-gray-400'>$27.99</del>
                                </p>

                                <div className='bg-gray-100 border border-gray-300'>
                                    <div className='flex justify-center items-center p-3 space-x-2 fl'>
                                        <FaRegClock className="text-lime-600 scale-125"></FaRegClock>
                                        <p className='para-font text-sm space-x-1'>
                                            <span className="text-lime-700">7238</span> Days : <span className="text-lime-700">20</span> Hours : <span className="text-lime-700">08</span> Mins : <span className="text-lime-700">37</span> Secs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-8/12'>
                        <div className="title-font">
                            <h2 className='text-2xl font-bold'>Hot Categories</h2>
                            <p className='my-3 border-b'></p>

                            <div className='grid grid-cols-2 gap-4 pt-2'>
                                <div>
                                    <div className='bg-gray-100 border-r border-b border-l'>
                                        <div className='border-t-2 p-4 border-lime-600'>
                                            <div className='flex items-center space-x-3'>
                                                <img className='' src={hot1} alt="" />

                                                <div className='title-font space-y-5'>
                                                    <h3 className='font-bold'>Baby Toys</h3>

                                                    <ul className='list-disc para-font ml-5 space-y-2 text-gray-500 text-sm'>
                                                        <li>Dresses</li>
                                                        <li>DVD Games</li>
                                                        <li>Board Games</li>
                                                        <li>Card Games</li>
                                                    </ul>

                                                    <button className='para-font bg-lime-600 hover:bg-slate-900 px-4 py-1 text-white'>
                                                        See More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='bg-gray-100 border-r border-b border-l'>
                                        <div className='border-t-2 p-4 border-lime-600'>
                                            <div className='flex items-center space-x-3'>
                                                <img className='' src={hot2} alt="" />

                                                <div className='title-font space-y-5'>
                                                    <h3 className='font-bold'>Gift For Men</h3>

                                                    <ul className='list-disc para-font ml-5 space-y-2 text-gray-500 text-sm'>
                                                        <li>Objects</li>
                                                        <li>Tabletop</li>
                                                        <li>Biker Jackets</li>
                                                        <li>Card Games</li>
                                                    </ul>

                                                    <button className='para-font bg-lime-600 hover:bg-slate-900 px-4 py-1 text-white'>
                                                        See More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='bg-gray-100 border-r border-b border-l'>
                                        <div className='border-t-2 p-4 border-lime-600'>
                                            <div className='flex items-center space-x-3'>
                                                <img className='' src={hot3} alt="" />

                                                <div className='title-font space-y-5'>
                                                    <h3 className='font-bold'>Building Toys</h3>

                                                    <ul className='list-disc para-font ml-5 space-y-2 text-gray-500 text-sm'>
                                                        <li>For Men</li>
                                                        <li>Fragrances</li>
                                                        <li>Card Games</li>
                                                        <li>Board Games</li>
                                                    </ul>

                                                    <button className='para-font bg-lime-600 hover:bg-slate-900 px-4 py-1 text-white'>
                                                        See More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='bg-gray-100 border-r border-b border-l'>
                                        <div className='border-t-2 p-4 border-lime-600'>
                                            <div className='flex items-center space-x-3'>
                                                <img className='' src={hot4} alt="" />

                                                <div className='title-font space-y-5'>
                                                    <h3 className='font-bold'>Arts and Crafts</h3>

                                                    <ul className='list-disc para-font ml-5 space-y-2 text-gray-500 text-sm'>
                                                        <li>Earings</li>
                                                        <li>Board Games</li>
                                                        <li>Card Games</li>
                                                        <li>DVD Games</li>
                                                    </ul>

                                                    <button className='para-font bg-lime-600 hover:bg-slate-900 px-4 py-1 text-white'>
                                                        See More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;