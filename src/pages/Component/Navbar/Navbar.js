import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { AiOutlineShoppingCart, AiFillMinusCircle, AiFillPlusCircle, AiFillCloseCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'

const Navbar = ({ cart, setCart, removeCart, clearCart, addToCart,total, SetTotal }) => {

  let [toggleState, setToggleState] = useState(false)

  let toggleMade = () => {
    setToggleState(!toggleState)
  }

  return (
    <div>
      <div className="text-gray-600 body-font bg-black shadow-xl fixed w-full z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
          <Link href={"/"} className="flex title-font font-medium  cursor-pointer text-gray-900 mb-4 md:mb-0 ml-0">
            <img src="https://dypdvfcjkqkg2.cloudfront.net/large/3884306-3406.png" className='mr-10' width="80" alt="" />
          </Link>
          <nav className="md:mr-auto flex mx-5 text-orange-500 flex-wrap items-center text-base justify-center">
            <Link href={"/Component/ProductsList/Cloths"} className="mr-5 hover:text-white cursor-pointer">Cloths</Link>
            <Link href={"/Component/ProductsList/Electronics"} className="mr-5 hover:text-white cursor-pointer">Electronics</Link>
            <Link href={"/Component/ProductsList/Grocery"} className="mr-5 hover:text-white cursor-pointer">Grocery</Link>
            <Link href={"/"} className="mr-5 hover:text-white cursor-pointer">Fourth Link</Link>
          </nav>
         <Link href={'/Component/Auth/Login'} className='absolute right-0 text-3xl mr-5  cursor-pointer '><MdAccountCircle className='text-orange-500 '/></Link>
          <button onClick={() => toggleMade()} className="inline-flex items-center absolute mr-20 cursor-pointer right-0 text-2xl bg-orange-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mtA-4 md:mt-0"><AiOutlineShoppingCart />
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        {toggleState ?

          <div className="md:w-72 sm:w-60 h-[100vh] sideBar absolute z-50 right-0 top-0 text-black bg-orange-400 py-12 px-8 ">
            <h2 className='font-bold text-center'>Shoping Cart</h2>
            <span className='absolute top-2 right-2 cursor-pointer text-xl text-black' onClick={() => toggleMade()}><AiFillCloseCircle /></span>
            <ol className='list-decimal'>

              {Object.keys(cart).length === 0 && <div className='mt-3 mb-3 text-white'>No Items In The Cart</div>}
              {
                Object.keys(cart).map((k) => {

                  return (

                    <li key={k}>
                      <div className="item flex items-center my-5">

                        <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                        <div className='w-1/3 font-bold flex items-center justify-center'> <AiFillMinusCircle onClick={() => removeCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='text-5xl mx-1 cursor-pointer ' /> {cart[k].qty} <AiFillPlusCircle onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer  text-5xl mx-1' /></div>

                      </div>
                    </li>
                  )
                })
              }
            </ol>

              <div className="subtotal font-bold text-lg my-3">
               Total : {total}
              </div>
            <div className="flex">
             <Link href={"/Component/CheckOut/Checkout"}>
              <button className="flex text-sm  mx-1 text-white bg-black border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded"><BsFillBagCheckFill  className="mt-1 mr-2" />Checkout</button></Link>
              <button className="flex text-sm text-white bg-black border-0 py-2 px-3 focus:outline-none hover:bg-orange-600 rounded" onClick={() => clearCart()}>Clear Cart</button>
            </div>

          </div>
          : ""}
      </div>
    </div>
  )
}

export default Navbar
