// Import necessary components and icons
import React, { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { TbChartSankey } from "react-icons/tb";

// Define the Sidebar component
const Sidebar = () => {
    // State to toggle the sidebar visibility
    const [toogleSideBar, setToogleSideBar] = useState(false);

    // Function to close the sidebar
    const closeSideBar = () => {
        setToogleSideBar(!toogleSideBar); // Toggle the value of toogleSideBar
    };

    return (
        <div className='bg-[#334155]'>
            {/* Sidebar toggle button */}
            <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="items-center p-2 bg-black ml-3 text-sm text-gray-500 rounded-lg block sm:block md:block lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={closeSideBar}
                >
                    {/* SVG path for close icon */}
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>
            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                
                className={`${
                    !toogleSideBar ? "hidden md:hidden lg:block" : "sm:block"
                } z-40 fixed sm:w-[20%] md:w-[25%] lg:w-[25%] xl:w-[25%] 2xl:w-[25%] top-0 h-[120vh] bg-[#1f2937]`}
                aria-label="Sidebar"
            >
                {/* Header */}
                <div className="flex items-center justify-between pt-2">
                    <h2 className="text-xl text-white p-2 ml-1">
                        Contact Management
                    </h2>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 lg:hidden md:block sm:block ml-auto mr-2 justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="authentication-modal"
                    >
                        {/* Close icon */}
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                            onClick={closeSideBar}
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Sidebar content */}
                <div className="h-full px-3 py-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {/* Home link */}
                        <li>
                            <a
                                href="/"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <AiFillHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ml-3">Home</span>
                            </a>
                        </li>
                        {/* Contact link */}
                        <li>
                            <a
                                href="/contact"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <BiSolidContact className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ml-3">Contact</span>
                            </a>
                        </li>
                        {/* Charts and Maps link */}
                        <li>
                            <a
                                href="/chart&map"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <TbChartSankey className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Charts And Maps</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

// Export the Sidebar component
export default Sidebar;
