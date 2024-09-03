"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Post = ({ addToCart = () => {} })=> {
  const { slug } = useParams();
  const [pin, setPin] = useState("");
  const [service, setService] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const checkServiceability = async () => {
    const res = await fetch("http://localhost:3000/api/pincode");
    const pinJson = await res.json();
    setService(pinJson.includes(parseInt(pin)));
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
    setService(null); // Reset the service state to hide the message
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Ensure the code runs only on the client-side
    if (typeof window !== "undefined") {
      setSidebarOpen(isSidebarOpen);
    }
  }, [isSidebarOpen]);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 lg:items-start mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="w-full lg:w-1/2 lg:h-auto px-4 lg:px-16 object-cover object-top rounded"
              src="https://m.media-amazon.com/images/I/71EuSpvOFQL._AC_SX385_.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-start justify-center">
              <h2 className="text-sm title-font text-gray-500 lg:text-start tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4 lg:justify-start justify-center">
                <span className="flex items-center lg:justify-start">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <svg
                        key={i}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className={`w-4 h-4 ${
                          i < 4 ? "text-pink-500" : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 lg:justify-start">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed lg:text-start text-center justify-center">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 lg:ml-0 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center mr-12">
                  <span className="mr-3 font-medium">Color</span>
                  <button className="border-2 border-gray-300 bg-gray-100 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 font-medium">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start space-x-2">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button
                  onClick={toggleSidebar}
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 01.11 7.78L12 21.35 3.45 12.4a5.5 5.5 0 017.78-.11l.93.94.94-.94a5.5 5.5 0 017.78-.11z"></path>
                  </svg>
                </button>
                <button onClick={()=>{addToCart(slug, 1, 499, 'Wear the code(XL, Red)', 'XL', 'Red')}} className="flex ml-auto text-white bg-pink-500 border-0 lg:py-2 py-0 text-sm px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Add to cart
                </button>
                <button className="flex ml-auto text-white bg-pink-500 border-0 lg:py-2 py-0 text-sm px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Buy Now
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input
                  onChange={onChangePin}
                  className="px-2 border-2 border-gray-400 rounded-md"
                  placeholder="Enter your pincode"
                  type="text"
                  value={pin}
                />
                <button
                  onClick={checkServiceability}
                  className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Check
                </button>
              </div>
              {service !== null && (
                service ? (
                  <div className="text-green-500 text-sm mt-3">
                    Yay! This pincode is serviceable.
                  </div>
                ) : (
                  <div className="text-red-500 text-sm mt-3">
                    Sorry! We do not deliver to this pincode.
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Post;
