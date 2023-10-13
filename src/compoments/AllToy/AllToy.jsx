// import React from 'react';
import { useEffect, useState } from 'react';
import './AllToy.css'
import ToyTable from './ToyTable';

const AllToy = () => {

    const [allToy, setAllToy] = useState([]);
    const [search, setSearch] = useState("");
    // UseTitle("All Toys");

    // find all toys by tabular form
    useEffect(() => {
        fetch("https://toys-marketplace-server-5hnkf0x9s-amirhamza24.vercel.app/allToy")
            .then((res) => res.json())
            .then((data) => setAllToy(data));
    }, []);

    // searching 
    const handleSearch = () => {
        fetch(`https://toys-marketplace-server-5hnkf0x9s-amirhamza24.vercel.app/allAddToy/${search}`)
        .then(res => res.json())
        .then(data => setAllToy(data))
    }

    return (
        <div className="mb-10">
            
            <div className='flex justify-center items-center w-full py-10'>
                <h2 className="text-center text-3xl md:text-5xl text-lime-600 font-bold w-full">All Toys</h2>
            </div>

            <div className='w-11/12 mx-auto'>
                <div className="my-10  flex justify-center space-x-1">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="px-4 py-2 focus:outline-none border border-gray-400 rounded w-2/6" />

                    <button className='cursor-pointer bg-lime-600 hover:bg-slate-900 py-2 rounded px-7 text-white text-lg font-semibold' onClick={handleSearch}>Search</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                allToy.map((singleAllToy, index) => <ToyTable
                                    key={singleAllToy._id}
                                    singleAllToy={singleAllToy}
                                    index={index}
                                ></ToyTable>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToy;