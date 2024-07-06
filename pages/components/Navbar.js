import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdCart } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar({ logout, user = {}, cart = {}, addtoCart, removeFromCart, clearCart, subTotal }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const toggledropdown = () => {
        setDropdown(!dropdown);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-center md:flex-row md:justify-start items-center flex-col sticky top-0 bg-white z-10'>
            <div className='logo'>
                <Image src="/2.jpg" alt="" width={40} height={20} />
            </div>
            <div className='nav mx-2 my-2'>
                <ul className='flex items-center space-x-2 font-bold md:text-xl'>
                    <li><Link href="/Tshirts">Tshirts</Link></li>
                    <li><Link href="/Hoodies">Hoodies</Link></li>
                    <li><Link href="/Stickers">Stickers</Link></li>
                    <li><Link href="/Mugs">Mugs</Link></li>
                </ul>
            </div>

            <div className='cart absolute top-2 right-12'>
                {user?.value ? (
                    <>
                        <FaRegUserCircle onClick={toggledropdown} className='text-3xl cursor-pointer' />
                        {dropdown && (
                            <div className='absolute right-4 bg-pink-300 w-[20vh] p-1 rounded-lg'>
                                <span className='absolute top-2 right-3 cursor-pointer' onClick={toggledropdown}>
                                    <AiOutlineClose />
                                </span>
                                <ul>
                                    <Link href='/Myaccount'><li className='py-1 hover:text-pink-200'>My Account</li></Link>
                                    <Link href='/Orders'><li className='py-1 hover:text-pink-200'>Orders</li></Link>
                                    <li onClick={logout} className='py-1 hover:text-pink-200'>Logout</li>
                                </ul>
                            </div>
                        )}
                    </>
                ) : (
                    <Link href='/Login'>
                        <button className='bg-pink-600 px-2 py-1 rounded-md text-white mx-2'>Login</button>
                    </Link>
                )}
            </div>
            <div onClick={handleToggle} className='cart absolute top-2 right-2'>
                <IoMdCart className='text-3xl cursor-pointer' />
            </div>
            {isOpen && (
                <div className='w-60 absolute top-0 right-0 bg-white rounded-2xl'>
                    <h3 className='font-bold text-lg p-3 text-center'>Shopping Cart</h3>
                    <span className='absolute top-4 right-4 cursor-pointer' onClick={handleToggle}>
                        <AiOutlineClose />
                    </span>
                    <ol className='text-black'>
                        {Object.keys(cart).length === 0 && <div className='my-4 font-normal'>No items in the cart</div>}
                        {Object.keys(cart).map((item) => (
                            <li key={item} className='py-2 px-4'>
                                <div className='flex my-3'>
                                    <div className='w-2/3'>{cart[item].name}</div>
                                    <div className='w-2/3'>{cart[item].size}</div>
                                    <div className='w-2/3'>{cart[item].variant}</div>
                                    <div className='flex items-center justify-between w-1/3'>
                                        <CiCircleMinus className='cursor-pointer' onClick={() => removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)} />
                                        <span>{cart[item].qty}</span>
                                        <CiCirclePlus className='cursor-pointer' onClick={() => addtoCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant)} />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <h2 className='mx-4'>Subtotal: Rs.{subTotal}</h2>
                    <div className='flex flex-row justify-between text-black'>
                        <Link href="/Checkout"><button className="bg-grey-500 border-0 py-2 px-6 text-black hover:bg-indigo-600 rounded text-sm text-center">Checkout</button></Link>
                        <button onClick={clearCart} className="bg-grey-500 border-0 py-2 px-6 text-black hover:bg-indigo-600 rounded text-sm text-center">Clear cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
