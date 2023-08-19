// Import React library
import React from 'react';

// Define the Home component
const Home = () => {
    return (
        <div className='bg-[#1f2837] lg:w-[80%] lg:ml-[20%] w-screen'>
            {/* Container for content */}
            <div className="min-h-screen flex flex-col justify-center items-center">
                {/* Section for main content */}
                <section className="max-w-3xl mx-auto p-6 bg-transparent rounded-md shadow-gradient-to-box" style={{boxShadow:"0px 0px 152px -38px black"}}>
                    {/* Title */}
                    <h1 className="text-4xl font-semibold text-white text-center mb-8">Welcome to Our Website</h1>
                    
                    {/* Paragraphs explaining Contact Management and COVID-19 Statistics */}
                    <p className="text-white flex flex-col justify-center">
                        <strong className='underline'>Contact Management:</strong> Welcome to our Contact Management page! Here, we provide you with the tools you need to efficiently manage your contacts. Our user-friendly interface makes it easy to create, edit, delete, and view contacts with just a few clicks. Powered by Redux, your contact data is organized and accessible, ensuring you stay in control of your important connections.
                    </p>
                    <p className="mt-4 text-white flex flex-col justify-center">
                        <strong className='underline'>COVID-19 Chart and Map:</strong> Stay informed about the global COVID-19 situation with our interactive charts and map. Our charts display the fluctuations in cases, giving you a visual representation of the pandemic's impact. The map provides a geographical perspective, with each country displaying a popup containing essential data – total cases, deaths, and recoveries. We use the power of the useQuery hook to fetch real-time data, ensuring you have access to the latest information.
                    </p>
                    {/* Paragraph about the website's comprehensive experience */}
                    <p className='text-white mt-1'>
                       <strong> Whether you're tracking the pandemic's progress or managing your contacts, our website offers a comprehensive experience.</strong>
                    </p>
                    
                    {/* Paragraph guiding the user to get started */}
                    <p className="mt-4 text-white">
                        <strong>To get started</strong>, click the button below and explore the features that matter most to you.
                    </p>
                </section>
                
                {/* Get Started button */}
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {/* Link to the Contact page */}
                        <a href="/contact">Get Started</a>
                    </span>
                </button>
            </div>
        </div>
    );
};

// Export the Home component
export default Home;
