"use client";

import { Inter } from "next/font/google";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { useState, useEffect } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const useCart = () => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saveCart = localStorage.getItem("cart");
        if (saveCart) {
          setCart(JSON.parse(saveCart));
        }
      } catch (error) {
        console.error("Failed to load cart from localStorage", error);
        localStorage.clear();
      }
    }
  }, []);
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart)); // stringify the cart object
    let subt = 0;
    let keys = Object.keys(myCart); // use myCart instead of cart
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  // useEffect(() => {
  //   const calculateSubTotal = () => {
  //     let subt = 0;
  //     const keys = Object.keys(cart);
  //     for (let i = 0; i < keys.length; i++) {
  //       subt += cart[keys[i]].price * cart[keys[i]].qty;
  //     }
  //     setSubTotal(subt);
  //   };
  //   calculateSubTotal();
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart }; // create a copy of the cart object
    if (itemCode in newCart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };
    // Update subtotal when cart changes
  //   let subt = 0;
  //   const keys = Object.keys(newCart);
  //   for (let i = 0; i < keys.length; i++) {
  //     subt += newCart[keys[i]].price * newCart[keys[i]].qty;
  //   }
  //   setSubTotal(subt);
  // };

  const clearCart = () => {
    setCart({});
    localStorage.clear(); // clear local storage when cart is cleared
  };


  const removeFromCart = (itemCode, qty) => {
    const newCart = { ...cart };
    if (itemCode in newCart) {
      newCart[itemCode].qty -= qty;
      if (newCart[itemCode]["qty"] <= 0) {
        delete newCart[itemCode];
      }
    }
    setCart(newCart);
    saveCart(newCart); // save cart after removing item
  };

  return {
    cart,
    subTotal,
    addToCart,
    clearCart,
    removeFromCart,
  };
};

export default function RootLayout({ children }) {
  const { cart, subTotal, addToCart, clearCart, removeFromCart } = useCart();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal }
        />
        <div className="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
