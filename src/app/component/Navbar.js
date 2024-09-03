"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosCloseCircle } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { BsBagCheckFill } from "react-icons/bs";

const Navbar = ({cart, addToCart, clearCart, subTotal, removeFromCart}) => {
  console.log( cart, addToCart, clearCart, subTotal, removeFromCart)
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  function toggleCart() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 mb-1 shadow-xl'>
        <Link href={'/'}>
          <Image width={200} height={40} src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <div className="nav">
          <ul className='flex items-center space-x-6 font-bold md:text-md py-3'>
            <li><Link href={'/tshirt'}>Tshirts</Link></li>
            <li><Link href={'/mugs'}>Mugs</Link></li>
            <li><Link href={'/hoodies'}>Hoodies</Link></li>
            <li><Link href={'/sticker'}>Stickers</Link></li>
          </ul>
        </div>
        <div className="cart absolute right-0 mx-5 top-4 cursor-pointer">
          <button onClick={toggleCart}>
            <IoCartOutline className="text-xl md:text-4xl" />
          </button>
        </div>
        <div
          ref={ref}
          className={`w-72 h-full sideCart absolute right-0 top-0 py-10 px-8 bg-pink-100 transform transition-transform ${isOpen ? 'open' : 'translate-x-full'}`}
          style={{ zIndex: 1000 }}
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
          >
            <IoIosCloseCircle />
          </span>
          <ol className="list-decimal font-semibold">
                {Object.keys(cart).length==0 && <div className="my-4 font-semibold">No items in the cart</div>}
                {Object.keys(cart).map((k)=>{return <li key={k}>
              <div className="item flex my-5">
                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                 <div className="flex items-center justify-center font-semibold w-1/3 text-lg">
                  <FaCircleMinus onClick={() => removeFromCart(k, 1)} className="cursor-pointer text-pink-500" />
                  <span className="mx-2">{cart[k].qty}</span>
                  <FaCirclePlus onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className="cursor-pointer text-pink-500" />
                </div>
              </div>
            </li>})}

          </ol>
          <div className='flex'>
            <button className="flex mr-1 items-center text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm mt-2">
              <BsBagCheckFill className="mr-2" />
              Checkout
            </button>
            <button onClick={clearCart} className="flex items-center ml-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm mt-2">
              <BsBagCheckFill className="mr-1" />
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
