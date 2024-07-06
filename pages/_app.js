import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "next/router";
import LoadingBar from "react-top-loading-bar";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: '' });
  const [key, setKey] = useState(0);
  const [progress, setProgress] = useState(0);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);

    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setProgress(100));
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      } else {
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    const token = localStorage.getItem("accessToken");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, []);

  const addtoCart = (itemCode, qty, price, name, size, variant) => {
    toast(`${qty} item of price ${price} and ${size}  added to cart`);
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const buynow = (itemCode, qty, price, name, size, variant) => {
    let newCart = { itemCode: { qty: 1, price, name, size, variant } };

    setCart(newCart);
    saveCart(newCart);
    console.log(newCart);
    Router.push("/Checkout");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser({ value: null });
    setKey(Math.random());
    Router.push("/");
  };
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      <LoadingBar
        color="#f11946"
        progress={progress}
        waitingTime={100}
        onLoaderFinished={() => setProgress(0)}
      />
      {
        <Navbar
          logout={logout}
          key={key}
          user={user}
          cart={cart}
          addtoCart={addtoCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
          buynow={buynow}
        />
      }
      <Component
        cart={cart}
        logout={logout}
        addtoCart={addtoCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        buynow={buynow}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
