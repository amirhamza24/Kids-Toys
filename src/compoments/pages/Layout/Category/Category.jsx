// import React from 'react';
import { useEffect, useState } from 'react';
import './Category.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCategory from './SingleCategory';

const Category = () => {

    const [categories, setCategories] = useState([]);

    const handleBtnActive = e => {
        fetch(`http://localhost:5000/allToy/${e}`)
        .then(res => res.json())
        .then(data => setCategories(data))
    }

    useEffect( () => {
        fetch('http://localhost:5000/allToy/Sports Car')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className=''>
            <div className='w-10/12 mx-auto border-t-2 border-lime-600'>
                <div className='my-10'>
                    <div>
                        <h2 className='text-center text-4xl font-bold para-font mb-5'>Product Categories</h2>
                        <p className='border'></p>
                    </div>
                </div>

                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleBtnActive("Sports Car")}>Sports Car</Tab>

                        <Tab onClick={() => handleBtnActive("Truck")}>Truck</Tab>

                        <Tab onClick={() => handleBtnActive("Mini Fire Truck")}>Fire Truck</Tab>
                    </TabList>

                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>


                <div className="grid grid-cols-3 gap-8 my-10">
                    {
                        categories.map(categoryOne => <SingleCategory
                            key={categoryOne._id}
                            categoryOne={categoryOne}
                            
                        >
                        console.log(categoryOne)
                        </SingleCategory> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;