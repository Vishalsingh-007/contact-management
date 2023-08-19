// Import necessary dependencies
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { Icon } from 'leaflet';
import { useQuery } from 'react-query';
import "leaflet/dist/leaflet.css"

// Define the Map component
const Map= () => {
    // Initialize state for countriesData using useState
    const [countriesData, setCountriesData] = useState([]);

    // Use react-query to fetch data from API and update countriesData
    const { isLoading, error } = useQuery(["countries"], () =>
        axios
            .get("https://disease.sh/v3/covid-19/countries")
            .then((res) => setCountriesData(res.data))
    );

    // Display loading spinner while data is being fetched
    if (isLoading) return (
        <div className="text-center">
            <div role="status">
                {/* SVG spinner animation */}
            </div>
        </div>
    );

    // Display error message if data fetching fails
    if (error) return "An error has occurred: " + error.message;

    // Define the center of the map
    const center = {
        lat: 20,
        lng: 77,
    }

    // Define a custom icon for the markers
    const customIcon = new Icon({
        iconUrl: require("../images/marker.png"),
        iconSize: [38, 38]
    })

    // Render the component
    return (
        <div>
            {/* Create a MapContainer */}
            <MapContainer center={center} zoom={13}>
                {/* Add the TileLayer */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Map through countriesData and add Markers with Popups */}
                {countriesData.map(country => (
                    <Marker
                        icon={customIcon}
                        key={country.countryInfo._id}
                        position={[country.countryInfo.lat, country.countryInfo.long]}
                    >
                        <Popup>
                            <div>
                                <h2>{country.country}</h2>
                                <p>Active Cases: {country.active}</p>
                                <p>Recovered: {country.recovered}</p>
                                <p>Deaths: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
