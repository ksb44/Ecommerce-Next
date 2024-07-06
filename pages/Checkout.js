import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Link from 'next/link';
import Head from 'next/head';
function Checkout({cart,subTotal,addtoCart,removeFromCart}) {
    return (
        <div className='container m-auto'>

          <Head>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
          </Head>
            <h1 className='font-bold text-3xl text-center'>Checkout</h1>
            <h2>1.Delivery Details</h2>
            <div className='mx-auto'>

                <div className=''>
                <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
        <input type="name" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
       

      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Address</label>
        <textarea id="Address" name="Address"  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className="relative mb-4">
        <label htmlFor="text" className="leading-7 text-sm text-gray-400">Phone</label>
        <input type="number" id="phone" name="text" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

      </div>
      <div className="relative mb-4">
        <label htmlFor="city" className="leading-7 text-sm text-gray-400">City</label>
        <input type="text" id="city" name="city" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

      </div>
      <div className="relative mb-4">
        <label htmlFor="pincode" className="leading-7 text-sm text-gray-400">Pincode</label>
        <input type="text" id="pincode" name="pincode" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

      </div>
      <div className="relative mb-4">
        <label htmlFor="state" className="leading-7 text-sm text-gray-400">State</label>
        <input type="text" id="state" name="state" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

      </div>
                </div>
            </div>
            <h2>2.Review Cart Items</h2>
            <div className='container m-auto w-60  bg-white rounded-2xl ' >
                    <h3 className='font-bold text-lg p-3 text-center text-black'>Shopping Cart</h3>
                   
                    <ol className='text-black '>
                        {Object.keys(cart).length==0 && <div className='my-4 font-normal'>No items in the cart</div>}
                       {Object.keys(cart).map((item)=>{return <li key={item} className='py-2 px-4 '>
                            <div className='flex my-3'>
                            <div className='w-2/3'>{cart[item].name} </div>
                            <div  className=' flex items-center justify-between w-1/3 '> 
                            <CiCircleMinus className='cursor-pointer'
                             onClick={()=>{removeFromCart(item,1,cart[item].price,cart[item].name,cart[item].size,cart[item].variant)}} /><span>{cart[item].qty}</span> 
                             <CiCirclePlus className='cursor-pointer'  onClick={()=>{addtoCart(item,1,cart[item].price,cart[item].name,cart[item].size,cart[item].variant)}}  /></div>
                            </div>
                            </li>})}
                     <span className='text-center mx-4'>Total:{subTotal}</span>    
                           
                    </ol>
                    <div className='flex flex-row justify-center text-black'>
                   <Link href="/Checkout" ><button className=" my-2 bg-grey-500 border-0 py-2 px-6 text-black hover:bg-indigo-600 rounded text-sm text-center">Pay ₹{subTotal}</button></Link>
           
                    </div>
                </div>
             </div>
    )
}
export default Checkout;