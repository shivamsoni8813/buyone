import Link from 'next/link'
import React from 'react'
import Product from '../../../../Modals/Product'
import mongoose from 'mongoose'

const Cloths = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font pt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              Object.keys(products).map((item) => {
                return (
                  <Link passHref={true} href={`/Component/Product/${products[item].slug}`} key={products[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg mx-7 my-1">
                    <span className="block relative h-80  rounded overflow-hidden">
                      <img alt="ecommerce" className="object-contain w-full h-full object-center " src={products[item].img} />
                    </span>
                    <div className="mt-4 px-12 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                      <h6 className="text-gray-900 title-font text-lg font-medium">color : {products[item].color}</h6>
                      <p className="mt-1">₹{products[item].price}</p>
                      <div className='mt-1'>
                        {products[item].size.includes("S") && <span>S,</span>}
                        {products[item].size.includes("M") && <span>M,</span>}
                        {products[item].size.includes("L") && <span>L,</span>}
                        {products[item].size.includes("XL") && <span>XL,</span>}
                        {products[item].size.includes("XXL") && <span>XXl,</span>}
                      </div>
                  
                    </div>
                  </Link>
                )
              })
            }

          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.Connection[0]) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({ category: "cloth" })
  console.log(products)
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }
  }
}

export default Cloths
