// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import MyToyTable from "./MyToyTable";
import bannerWrap from "../../assets/all/banner-wrap.jpg"

const MyToy = () => {

const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    // UseTitle('My Toys');

    // user cannot see the toys other users added. create it by users email
    const url = `http://localhost:5000/allAddToy?seller_email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, [url]);

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

            if(result.isConfirmed) {
                fetch(`http://localhost:5000/allAddToy/${id}`, {
                    method: 'DELETE',

                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if(data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been deleted.',
                            'success'
                        )
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
                
            }
        })
    }

    return (
        <div className="mb-10">
            <img className='relative' src={bannerWrap} alt="" />
        
            <div className='absolute bottom-20 left-0 h-full flex justify-center items-center w-full'>
                <h2 className="text-center text-3xl md:text-5xl text-white font-bold w-full">My Toys</h2>
            </div>

            <div className="overflow-x-auto mt-10">
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
                            
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((myToy, index) => <MyToyTable
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                                index={index}
                            
                            ></MyToyTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;