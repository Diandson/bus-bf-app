'use client';

import { useState, useCallback} from 'react';
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    DirectionsRenderer,
} from '@react-google-maps/api';
import {BusProps} from "@/app/service/data";

const center = {lat: 12.370216725746165, lng: -1.5295478824460456}; // Centre de Ouagadougou

export const BusRoute = ({bus}: { bus: BusProps }) => {
    const [map, setMap] = useState<google.maps.Map | undefined>(undefined);

    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDKn0RT7RqxqkIBSnMckyIil7P-shK9xqg',
        libraries: ['places'],
    });

    const onLoad = useCallback((map: google.maps.Map)  => {
        setMap(map);
        calculateRoute();
    }, []);

    const calculateRoute = async () => {
        if (!window.google) return;

        const directionsService = new window.google.maps.DirectionsService();
        const waypoints = bus.stops.slice(1, -1).map(point => ({
            location: new window.google.maps.LatLng(point.lat, point.lng),
            stopover: true
        }));

        const results = await directionsService.route({
            origin: new window.google.maps.LatLng(bus.stops[0].lat, bus.stops[0].lng),
            destination: new window.google.maps.LatLng(
                bus.stops[bus.stops.length - 1].lat,
                bus.stops[bus.stops.length - 1].lng
            ),
            waypoints: waypoints,
            travelMode: window.google.maps.TravelMode.DRIVING,
        });

        setDirectionsResponse(results);
    };

    if (!isLoaded) {
        return <div className="h-screen flex items-center justify-center">Chargement...</div>;
    }

    const simpleCircleIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "#000",
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: "#ffffff",
        scale: 10
    }

    return (
        <div className="h-screen w-full">
            <div className="h-full relative">
                <GoogleMap
                    center={center}
                    zoom={13}
                    mapContainerClassName="w-full h-full"
                    onLoad={onLoad}
                >
                    {bus.stops.map((stop, index) => (
                        <Marker
                            key={index} icon={simpleCircleIcon}
                            position={{ lat: stop.lat, lng: stop.lng }}
                            label={{
                                text: stop.name,
                                className: "marker-label"
                            }}
                        />
                    ))}
                    {directionsResponse && (
                        <DirectionsRenderer
                            directions={directionsResponse}
                            options={{
                                suppressMarkers: true,
                                polylineOptions: {
                                    strokeColor: "#2563eb",
                                    strokeWeight: 5,
                                }
                            }}
                        />
                    )}
                </GoogleMap>
            </div>
        </div>
    );
};
export default BusRoute;
