import React from "react";
function Order() {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-4">
                Order Id: #69
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-pink-400 border-b-2 border-pink-500 py-2 text-lg px-1">
                  Description
                </a>

                <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                  Details
                </a>
              </div>
              <p className="leading-relaxed mb-4">
                Your order has been placed successfully{" "}
              </p>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Variant</span>
                <span className="ml-auto text-white">Blue</span>
              </div>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-white">Medium</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-white">4</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  ₹58.00
                </span>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-[40vh] lg:h-auto h-64  m-auto rounded"
              src="https://m.media-amazon.com/images/I/6100ZEUMysL._SX679_.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Order;
