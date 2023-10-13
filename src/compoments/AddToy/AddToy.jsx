// import React from 'react';
import './AddToy.css'
import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProviders';

const AddToy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const img = form.img.value;
        const name = form.name.value;
        // const name = form.name.value;
        // const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = { img, name, category, price, rating, quantity, description, seller_name: user.displayName, seller_email: user.email };

        console.log(newToy);

        fetch(`https://toys-marketplace-server-5hnkf0x9s-amirhamza24.vercel.app/allAddToy`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                Swal.fire(
                    "Success!",
                    "Toy Added Successfully",
                    "success"
                );
            form.reset();
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
        })
        console.log(newToy);
    }

    return (
        <div>
            <div className="my-12 w-10/12 mx-auto">
                <h2 className="text-center text-3xl md:text-5xl text-lime-600 font-bold w-full">Add a New Toy</h2>

                <div className="mt-8">
                    <form onSubmit={handleAddToy}>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Photo URL of Toy:</p>
                                    </label>

                                    <input type="text" name='img' placeholder="Photo URL" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Toy Name:</p>
                                    </label>

                                    <input type="text" name='name' placeholder="Toy Name" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                {/* <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Seller Name:</p>
                                    </label>

                                    <input type="text" name='name' placeholder="Your Name" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Seller Email:</p>
                                    </label>

                                    <input type="email" name='email' placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div> */}

                                <div className="space-y-2">
                                    <p className="text-left font-semibold">Category:</p>

                                    <select name="category" className="w-full px-4 py-2 mb-4 focus:outline-none border rounded">
                                        <option value="Sports Car">Sports Car</option>
                                        <option defaultValue="Truck">Truck</option>
                                        <option defaultValue="Mini Fire Truck">Mini Fire Truck</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Price:</p>
                                    </label>

                                    <input type="text" name='price' placeholder="Price" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Rating:</p>
                                    </label>

                                    <input type="text" name='rating' placeholder="Rating" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Available Quantity:</p>
                                    </label>

                                    <input type="text" name='quantity' placeholder="Available Quantity" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>
                            </div>

                            <div className="space-y-2 mt-6">
                                <p className="text-left font-semibold">Description</p>
                                <textarea name="description" className="border w-full lg:w-6/12 px-4 py-2 focus:outline-none" placeholder="Description" ></textarea> 
                            </div>

                            <div className="text-center">
                                <input className='cursor-pointer mt-8 bg-white border border-lime-600 text-black hover:bg-lime-600 hover:text-white py-2 px-10 text-lg font-semibold' type="submit" value="Add Toy" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;