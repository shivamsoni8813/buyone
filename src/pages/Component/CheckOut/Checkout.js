import Link from "next/link";
import React from "react";
import {
    AiFillMinusCircle,
    AiFillPlusCircle,
    AiFillCloseCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
const Checkout = ({
    cart,
    setCart,
    addToCart,
    removeCart,
    clearCart,
    total,
}) => {
    return (
        <div>
            <div className="container pt-20">
                <section className="text-orange-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-900">
                                Delivery Details
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                                gentrify.
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            htmlFor="name"
                                            className="leading-7 text-sm text-orange-600"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-orange-100 bg-opacity-50 rounded border border-orange-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            htmlFor="email"
                                            className="leading-7 text-sm text-orange-600"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-orange-100 bg-opacity-50 rounded border border-orange-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            htmlFor="phone"
                                            className="leading-7 text-sm text-orange-600"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="phone"
                                            id="phone"
                                            name="email"
                                            className="w-full bg-orange-100 bg-opacity-50 rounded border border-orange-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            htmlFor="zipcode"
                                            className="leading-7 text-sm text-orange-600"
                                        >
                                            ZipCode
                                        </label>
                                        <input
                                            type="text"
                                            id="zipcode"
                                            name="email"
                                            className="w-full bg-orange-100 bg-opacity-50 rounded border border-orange-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label
                                            htmlFor="message"
                                            className="leading-7 text-sm text-orange-600"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="w-full bg-orange-100 bg-opacity-50 rounded border border-orange-300 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
                                        Submit
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="itemReview md:ml-10 flex justify-center items-center mb-48">
                      
                        <div className="md:w-full w-full mt-5 sideBar absolute   text-black bg-orange-400 py-12 px-8 ">
                            <ol className="list-decimal">
                                {Object.keys(cart).length === 0 && (
                                    <div className="mt-3 mb-3 text-white">
                                        No Items In The Cart
                                    </div>
                                )}
                                {Object.keys(cart).map((k) => {
                                    return (
                                        <li key={k}>
                                            <div className="item flex items-center my-5">
                                                <div className=" font-semibold text-xl">
                                                    {cart[k].name}
                                                </div>
                                                <div className="w-1/3 font-bold flex items-center justify-center">
                                                    {" "}
                                                    <AiFillMinusCircle
                                                        onClick={() =>
                                                            removeCart(
                                                                k,
                                                                1,
                                                                cart[k].price,
                                                                cart[k].name,
                                                                cart[k].size,
                                                                cart[k].variant
                                                            )
                                                        }
                                                        className="text-3xl mx-1 cursor-pointer "
                                                    />{" "}
                                                    {cart[k].qty}{" "}
                                                    <AiFillPlusCircle
                                                        onClick={() =>
                                                            addToCart(
                                                                k,
                                                                1,
                                                                cart[k].price,
                                                                cart[k].name,
                                                                cart[k].size,
                                                                cart[k].variant
                                                            )
                                                        }
                                                        className="cursor-pointer  text-3xl mx-1"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ol>
                            <div className="h2 text-2xl font-bold">Total : {total}</div>
                        </div>
                        <div className="bytBtn relative top-40">
                            <button className=" flex text-sm  mx-1 text-white bg-black border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded">
                                <BsFillBagCheckFill className="mt-1 mr-2" />
                                Pay Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Checkout;
