import { useEffect, useState } from 'react';
import { MapContainer, CircleMarker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './maps.module.css';

const Map = () => {
    const palangkaRayaCoordinates = [-2.2096, 113.9203];
    const [zoom, setZoom] = useState(15); // State to manage the zoom level
    const [rotation, setRotation] = useState(0); // State to manage the rotation angle

    useEffect(() => {
        // Function to zoom in and rotate after 1 second when the component mounts
        const timer = setTimeout(() => {
            setZoom(16); // Change the zoom level to zoom in
            setRotation(45); // Set rotation angle to 45 degrees
        }, 1000);

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <MapContainer
            center={palangkaRayaCoordinates}
            zoom={zoom}
            scrollWheelZoom={false} // Disable scroll wheel zoom
            style={{ height: '800px', width: '1280px', margin: 'auto' }}
            className={`${styles.mapcontainer}${
                rotation !== 0 ? ` ${styles['rotatetransition']}` : ''
            }`}
        >
            {/* Dark Matter Tile Layer */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {/* Circle Marker */}
            <CircleMarker
                center={palangkaRayaCoordinates}
                radius={10}
                fillColor="white"
                color="black"
            >
                <Popup>This is a circle marker.</Popup>
            </CircleMarker>
        </MapContainer>
    );
};

export default Map;
