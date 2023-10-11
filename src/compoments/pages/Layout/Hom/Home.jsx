// import React from 'react';

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Deals from "../Deals/Deals";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import MiddleOffer from "../MiddleOffer/MiddleOffer";
import Offer from "../Offer/Offer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Deals></Deals>
            <MiddleOffer></MiddleOffer>
            <Category></Category>
            <MiddleBanner></MiddleBanner>
        </div>
    );
};

export default Home;