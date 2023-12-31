// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import MyToyTable from "./MyToyTable";

const MyToy = () => {

const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    // UseTitle('My Toys');

    // user cannot see the toys other users added. create it by users email
    const url = `https://toys-marketplace-server-5hnkf0x9s-amirhamza24.vercel.app/allToys/${user?.email}`;
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
                fetch(`https://toys-marketplace-server-5hnkf0x9s-amirhamza24.vercel.app/allAddToy/${id}`, {
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
        <div className="my-10 w-11/12 mx-auto">
            <div className='flex justify-center items-center w-full'>
                <h2 className="text-center text-3xl md:text-5xl text-lime-600 font-bold w-full">My Toys</h2>
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