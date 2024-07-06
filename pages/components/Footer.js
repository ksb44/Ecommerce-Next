import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <div>
            <footer className="text-gray-400 bg-gray-900 body-font flex items-center justify-center">
                <div className="container px-5 py-24 mx-auto flex flex-col items-center">
                    <div className="w-64 flex-shrink-0 text-center">
                        <a className="flex title-font font-medium items-center justify-center text-white">
                            <img src="/1.jpg" alt=""/>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Welcome to e-commerce store</p>
                    </div>
                    <div className="flex-grow flex flex-wrap justify-center mt-10 text-center">
                        <div className="w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Shop</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href='/Tshirts' className="text-gray-400 hover:text-white">Tshirts</Link>
                                </li>
                                <li>
                                    <Link href='/Hoodies' className="text-gray-400 hover:text-white">Hoodies</Link>
                                </li>
                                <li>
                                    <Link href='/Stickers' className="text-gray-400 hover:text-white">Stickers</Link>
                                </li>
                                <li>
                                    <Link href='/Mugs' className="text-gray-400 hover:text-white">Mug</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
