// import React from 'react';
import './Offer.css';
import offer1 from "../../../../assets/all/offer/offer1.jpg"
import offer2 from "../../../../assets/all/offer/offer2.jpg"
import offer3 from "../../../../assets/all/offer/offer3.jpg"

const Offer = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='flex gap-10'>
                <div>
                    <img src={offer1} alt="" />
                </div>

                <div>
                    <img src={offer2} alt="" />
                </div>

                <div>
                    <img src={offer3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offer;