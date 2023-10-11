// import React from 'react';

import offer4 from "../../../../assets/all/offer/offer4.jpg";
import offer5 from "../../../../assets/all/offer/offer5.jpg";

const MiddleOffer = () => {
    return (
        <div className="my-10 w-10/12 mx-auto">
            <div className="flex gap-8">
                <img className="w-5/12" src={offer4} alt="" />
                <img className="w-7/12" src={offer5} alt="" />
            </div>
        </div>
    );
};

export default MiddleOffer;