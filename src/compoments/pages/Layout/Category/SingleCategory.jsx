// import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const SingleCategory = ({ categoryOne }) => {
    const { name, price, img, category, rating, _id } = categoryOne;


    return (
        <div>
            <div>
                <div className="border space-y-10">
                    <div className="flex justify-center">
                        <img className="w-72 h-64" src={img} alt="" />
                    </div>

                    <div className="space-y-3 px-6 pb-5 para-font">
                        <p className="text-center font-semibold">{name}</p>

                        <div className="flex justify-between">
                            <p className="">Price: <span className="text-lime-600 font-semibold">${price}</span></p>
                            <p className="">Rating: <span className='font-semibold text-orange-600'>{rating}</span></p>
                        </div>

                        <p>Category: {category}</p>

                        <Link to={`/toyDetails/${_id}`}>
                            <button className='para-font bg-lime-600 hover:bg-slate-900 px-4 py-1 text-white'>See Details</button>
                        </Link>

                        {/* to={`/toyDetails/${_id}`} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;