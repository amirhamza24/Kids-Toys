// import React from 'react';
import "./BLog.css";
import blog1 from "../../../../assets/all/blog/blog1.jpg";
import blog2 from "../../../../assets/all/blog/blog2.jpg";
import blog3 from "../../../../assets/all/blog/blog3.jpg";

const Blog = () => {
    return (
        <div className="my-12 w-10/12 mx-auto mt-20">
            <div>
                <div className="title-font mb-10">
                    <h2 className="text-4xl font-bold text-center">
                        From The Blogs
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10">
                <div className=" space-y-3 p-4 shadow-lg">
                    <div>
                        <img src={blog1} alt="" />
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold text-lg para-font">
                            Bibendum Auctor
                        </p>

                        <div className="flex items-center space-x-6 text-sm">
                            <p className="text-lime-600">
                                Post by: MartinFrank
                            </p>

                            <span className="border-r h-4 border-gray-300"></span>

                            <p className="text-gray-400">Jun 25, 2017</p>
                        </div>

                        <p className="text-gray-500 text-sm pb-3">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium. At Nulla...
                        </p>

                        <button className="border px-4 py-1 hover:bg-lime-500 hover:text-white">
                            Reed More
                        </button>
                    </div>
                </div>

                <div className=" space-y-3 p-4 shadow-lg">
                    <div>
                        <img src={blog2} alt="" />
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold text-lg para-font">
                            Bibendum Auctor
                        </p>

                        <div className="flex items-center space-x-6 text-sm">
                            <p className="text-lime-600">
                                Post by: MartinFrank
                            </p>

                            <span className="border-r h-4 border-gray-300"></span>

                            <p className="text-gray-400">Jul 25, 2017</p>
                        </div>

                        <p className="text-gray-500 text-sm pb-3">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium. At Nulla...
                        </p>

                        <button className="border px-4 py-1 hover:bg-lime-500 hover:text-white">
                            Reed More
                        </button>
                    </div>
                </div>

                <div className=" space-y-3 p-4 shadow-lg">
                    <div>
                        <img src={blog3} alt="" />
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold text-lg para-font">
                            Bibendum Auctor
                        </p>

                        <div className="flex items-center space-x-6 text-sm">
                            <p className="text-lime-600">
                                Post by: MartinFrank
                            </p>

                            <span className="border-r h-4 border-gray-300"></span>

                            <p className="text-gray-400">Aug 25, 2017</p>
                        </div>

                        <p className="text-gray-500 text-sm pb-3">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium. At Nulla...
                        </p>

                        <button className="border px-4 py-1 hover:bg-lime-500 hover:text-white">
                            Reed More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
