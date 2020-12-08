import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import httpRequests from '../../helpers/httpRequests';
import preQa from '../../config/pre-qa';
import SearchSection from './components/searchSection';
import InfoWindowCard from './components/infoWindowCard';

const containerStyle = {
    width: '100%',
    height: '80vh',
};

const divStyle = {
    background: 'black',
    border: '1px solid #ccc',
    padding: 15,
};

const loadMap = () => {
    const [zoom, setZoom] = useState(11);
    const [geolocationAvailablity, setGeolocationAvailablity] = useState(true);
    const [center, setCenter] = useState({});
    const [latitude, setLatitude] = useState('');
    const [longitude, setlongitude] = useState('');
    const [openInfoWindowMarkerCoordinates, setoOpenInfoWindowMarkerCoordinates] = useState('');
    const [nearbyLocations, setnearbyLocations] = useState([
        {
            id: 1,
            location: { lat: 6.8649, lng: 79.8997 },
        },
        {
            id: 2,
            location: { lat: 6.8695, lng: 79.8977 },
        },
    ]);

    useEffect(() => {
        httpRequests.getUserLocation().then(response => {
            setLatitude(response.data.location.lat);
            setlongitude(response.data.location.lng);
            setCenter(response.data.location);
        });
    }, [geolocationAvailablity]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLatitude(position.coords.latitude);
                    setlongitude(position.coords.longitude);
                },
                error => {
                    setGeolocationAvailablity(false);
                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
        } else {
            setgeolocation(false);
        }
    }, []);

    return (
        <div>
            <div className="map">
                {latitude && longitude && (
                    <LoadScript googleMapsApiKey={preQa.google_api_key}>
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} clickableIcons={false}>
                            <Marker position={center} />
                            {nearbyLocations.map(propertyCoordinate => (
                                <Marker
                                    key={propertyCoordinate.id}
                                    position={propertyCoordinate.location}
                                    onClick={() => setoOpenInfoWindowMarkerCoordinates(propertyCoordinate.location)}
                                />
                            ))}
                            {openInfoWindowMarkerCoordinates && (
                                <InfoWindow position={openInfoWindowMarkerCoordinates} onCloseClick={() => setoOpenInfoWindowMarkerCoordinates('')}>
                                    <InfoWindowCard />
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                )}
            </div>
            <SearchSection />
        </div>
    );
};

export default loadMap;
