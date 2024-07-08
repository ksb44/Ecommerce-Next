import React, { useState } from "react";
import { useRouter } from "next/router";
import connectDB from "@/databases";
import Product from "@/models/Product";
import { toast } from "react-toastify";

function slug({ addtoCart, product, variants, clearCart, buynow }) {
  const router = useRouter();
  const { slug } = router.query;

  let [pin, setPin] = React.useState();
  const [service, setService] = React.useState();
  const checkforserviceability = async () => {
    try {
      let pins = await fetch("https://ecommerce-next-x3mg.onrender.com/api/pincode");
      let pinjson = await pins.json();
      if (pinjson.includes(parseInt(pin))) {
        setService(true);
        toast.success("Your pincode is available");
      } else {
        setService(false);
        toast.error("Your pincode is unavailable");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handlePin = (e) => {
    setPin(e.target.value);
  };
  let [color, setcolor] = useState(product.color);
  let [size, setSize] = useState(product.size);
  const refreshVariant = (newSize, newColor) => {
    let url = `https://ecommerce-next-x3mg.onrender.com/product/${variants[newColor][newSize]["slug"]}`;
    window.location = url;
  };

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container py-24 text-center">
          <div className="lg:w-4/5">
            <img
              alt="ecommerce"
              className="lg:w-1/2 lg:h-auto  h-60 mx-auto rounded items-center "
              src={product.img}
            />
            <div className="lg:w-1/1 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                H&M
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5 justify-center">
                <div className="">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes("red") &&
                    Object.keys(variants["red"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "red");
                        }}
                        className="border-2 border-gray-800 bg-red-700 rounded-full w-6 h-6 focus:outline-none"
                      ></button>
                    )}
                  {Object.keys(variants).includes("blue") &&
                    Object.keys(variants["blue"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "blue");
                        }}
                        className="border-2 border-gray-800 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"
                      ></button>
                    )}
                  {Object.keys(variants).includes("black") &&
                    Object.keys(variants["black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "black");
                        }}
                        className="border-2 border-gray-800 bg-black rounded-full w-6 h-6 focus:outline-none"
                      ></button>
                    )}
                  {Object.keys(variants).includes("green") &&
                    Object.keys(variants["green"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "green");
                        }}
                        className="border-2 border-gray-800 bg-green-700 rounded-full w-6 h-6 focus:outline-none"
                      ></button>
                    )}
                  {Object.keys(variants).includes("yellow") &&
                    Object.keys(variants["yellow"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "yellow");
                        }}
                        className="border-2 border-gray-800 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"
                      ></button>
                    )}
                  {Object.keys(variants).includes("brown") &&
                    Object.keys(variants["brown"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "brown");
                        }}
                        className="border-2 border-gray-800 bg-amber-700 rounded-full w-6 h-6 focus:outline-none"
                      ></button>
                    )}
                  {Object.keys(variants).includes("pink") &&
                    Object.keys(variants["pink"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "pink");
                        }}
                        className="border-2 border-gray-800 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"
                      ></button>
                    )}
                  {Object.keys(variants).includes("white") &&
                    Object.keys(variants["white"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "white");
                        }}
                        className="border-2 border-gray-800 bg-white rounded-full w-6 h-6 focus:outline-none"
                      ></button>
                    )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariant(e.target.value, color);
                      }}
                      className="rounded border border-gray-700 focus:ring-2 focus:ring-pink-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-pink-500 text-white pl-3 pr-10"
                    >
                      {Object.keys(variants[color]).includes("S") && (
                        <option value={"S"}>S</option>
                      )}
                      {Object.keys(variants[color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(variants[color]).includes("L") && (
                        <option value={"L"}>L</option>
                      )}
                      {Object.keys(variants[color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(variants[color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className=" my-4 text-center">
                <span className="title-font my-2 font-medium text-2xl  text-white ">
                  Rs.{product.price}
                </span>
                <div className="flex justify-center my-2 mx-2">
                  <button
                    onClick={() => {
                      buynow(slug, 1, 499, product.title, size, color);
                    }}
                    className=" mx-2  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => {
                      addtoCart(slug, 1, 499, product.title, size, color);
                    }}
                    className="mx-2  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <hr />
              <div className="my-3 flex flex-row justify-between">
                <input
                  type="text"
                  placeholder="pincode"
                  id="pin"
                  name="pin"
                  onChange={handlePin}
                  className=" bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                  onClick={checkforserviceability}
                >
                  Check
                </button>
              </div>

              {!service && service != null && (
                <div className="text-red-500">
                  This pincode is not available
                </div>
              )}

              {service && service != null && (
                <div className="text-green-500">This pincode is available</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  connectDB();
  let product = await Product.findOne({ slug: context.query.slug });
  if (product == null) {
    return { notFound: true, props: {} };
  }
  let variants = await Product.find({ title: product.title });
  let colorSizeSlug = {};

  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}
export default slug;
