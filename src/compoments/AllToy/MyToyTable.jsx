// import React from 'react';
import { Link } from "react-router-dom";

const MyToyTable = ({ myToy, handleDelete, index }) => {

    const { _id, img, seller_name, name, category, price, quantity } = myToy;

    return (
        <>
            <tr className="">
                <td>{index + 1}</td>
                <td>
                    <div className="avatar">
                        <div className="w-20 h-20 rounded">
                            <img src={img} className="w-full" />
                        </div>
                    </div>
                </td>
                <td>{seller_name}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                
                <td>
                    <Link to={`/updateToy/${_id}`}>
                        <button className="border border-lime-600 w-24 text-center py-1 hover:bg-lime-600 hover:text-white cursor-pointer">
                            Update
                        </button>
                    </Link>
                </td>

                <td>
                    <button className="border border-red-600 w-24 text-center py-1 hover:bg-red-600 hover:text-white cursor-pointer" onClick={() => handleDelete(_id)}>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default MyToyTable;