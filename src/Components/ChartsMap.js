// Chart And Map Component
// Import necessary dependencies
import React ,{useEffect} from 'react'
import Chart from './Charts';
import Map from './Map';
const ChartsMap = () => {
    // Set Title For This Page
    useEffect(() => {
        document.title = 'Charts and Maps';
      });
    return (
        <div className=" lg:w-[74%] lg:ml-[26%] md:w-[100%]  w-screen pb-7  h-max bg-slate-700">
            <div className="header text-center mb-4">
                {/* Heading */}
                <h1 className="text-2xl text-white font-semibold pt-2">Charts And Maps</h1>
            </div>
            <div className="section bg-white rounded-md shadow-md p-4 mb-4 m-[15px]">
                <div className="section-header border-b pb-2 mb-2">
                    {/* Heading For Chart */}
                    <h2 className="text-xl text-center font-semibold">Chart : Covid-19 Cases Fluctuations</h2>
                </div>
                <div className="section-content">
                    {/* Chart Component */}
                    <Chart/>
                </div>
            </div>
            <div className="section bg-white rounded-md mb-0 p-4 m-[15px]">
                <div className="section-header border-b pb-2 mb-5">
                    {/* Heading For Map */}
                    <h2 className="text-xl text-center font-semibold">Map : Covid-19 Cases by Country </h2>
                </div>
                <div className="section-content">
                    {/* Map Component */}
                    <Map/>
                </div>
            </div>
        </div>


    )
}

export default ChartsMap
