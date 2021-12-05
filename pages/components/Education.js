import React, { Component } from "react";

class Education extends Component {

    render() {

        return (
            <>
            {/* Education Section and Experience too */}
            <center><h1>Education</h1></center>
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://scholarship-positions.com/wp-content/uploads/2020/01/Australia-Awards-Scholarships-at-RMIT-University-2020.png" alt="blog"/>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">RMIT University Australia</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Bachelor of Computer Science</h1>
                    <p className="leading-relaxed mb-3">Due to graduate on 2022.</p>
                </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/FsqIqqcOcAE/maxresdefault.jpg" alt="blog"/>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Mastermind School, Dhaka, Bangladesh</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">International Advanced Levels</h1>
                    <p className="leading-relaxed mb-3">High School (2008-2020).</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      {/* The End */}
            </>
        );
    }
}

export default Education;