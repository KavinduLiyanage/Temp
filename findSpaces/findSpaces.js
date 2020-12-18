/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import appConfig from 'appConfig';
import httpRequests from '../../helpers/httpRequests';
import SearchSection from './components/searchSection';
import InfoWindowCard from './components/infoWindowCard';
import { PrimaryButton } from '../../components/common/buttons';

const containerStyle = {
    width: '100%',
    height: '80vh',
};

const options = {
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
};

const loadMap = () => {
    const [zoom] = useState(11);
    const [mapView, setMapView] = useState(true);
    const [mapStyle, setMapStyle] = useState('map');
    const [center, setCenter] = useState({ lat: 6.8649, lng: 79.8997 });
    const [openInfoWindowMarkerCoordinates, setOpenInfoWindowMarkerCoordinates] = useState();
    const [nearbyLocations] = useState([
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
            setCenter(response.data.location);
        });
    }, []);

    useEffect(() => {
        if (mapView === true) {
            setMapStyle('map');
        } else {
            setMapStyle('map-half');
        }
    }, [mapView]);

    return (
        <div className="wrapper-map">
            <LoadScript libraries={['places']} googleMapsApiKey={appConfig.google_api_key}>
                <div className={mapStyle}>
                    {center && (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={zoom}
                            clickableIcons={false}
                            options={options}
                            onClick={() => setOpenInfoWindowMarkerCoordinates('')}
                        >
                            <Marker position={center} />
                            {[...nearbyLocations].map(propertyCoordinate => (
                                <Marker
                                    key={propertyCoordinate.id}
                                    position={propertyCoordinate.location}
                                    onClick={() => setOpenInfoWindowMarkerCoordinates(propertyCoordinate.location)}
                                />
                            ))}
                            {openInfoWindowMarkerCoordinates && (
                                <InfoWindow position={openInfoWindowMarkerCoordinates} onCloseClick={() => setOpenInfoWindowMarkerCoordinates('')}>
                                    <InfoWindowCard
                                        title="Small office - 3 Rooms"
                                        price={890}
                                        period="monthly"
                                        mainRating={9.6}
                                        votes={860}
                                        dealRating={8}
                                    />
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    )}
                </div>
                <div className="sidebar-map">
                    <SearchSection />
                </div>
            </LoadScript>
            <PrimaryButton onClick={() => setMapView(!mapView)}>Change View</PrimaryButton>
        </div>
    );
};

export default loadMap;
