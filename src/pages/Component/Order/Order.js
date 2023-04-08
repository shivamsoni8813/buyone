import React from 'react'

const Order = () => {
  return (
    <section className="text-orange-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font ml-1 text-orange-500 tracking-widest">E-shopper</h2>
            <h1 className="text-orange-900 text-3xl title-font font-medium mb-4">Order Id:#12345</h1>
                <a class="flex-grow text-black  border-orange-500 py-2 text-lg px-1">Your Order has been successfully placed.</a>
              <div class="flex mb-4">
                <a class="flex-grow text-center text-orange-900   border-orange-500 py-2 text-lg px-1">Description</a>
                <a class="flex-grow text-center py-2 text-orange-900  text-lg px-1">Quantity</a>
                <a class="flex-grow text-center  py-2 text-orange-900  text-lg px-1">Total</a>
              </div>
            <div className="flex border-t border-orange-200 py-2">
              <span className="text-black">Tshirt</span>
              <span className="ml-auto text-black">1</span>
              <span className="ml-auto text-black">₹499</span>
            </div>
            <div className="flex border-t border-orange-200 py-2">
              <span className="text-black">Mug</span>
              <span className="ml-auto text-black">1</span>
              <span className="ml-auto text-black">₹399</span>
            </div>
            <div className="flex border-t border-b mb-6 border-orange-200 py-2">
              <span className="text-black">Tshirt</span>
              <span className="ml-auto text-black">1</span>
              <span className="ml-auto text-black">₹1089</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-orange-900">₹58.00</span>
              <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Track Order</button>
             
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
  )
}

export default Order
