'use client'


import Layout from "@/components/layout/Layout";
import {useParams} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    DirectionsRenderer,
} from '@react-google-maps/api';
import BusRoute from "@/components/BusRoute";

const center = { lat: 12.3714277, lng: -1.5196288 }; // Centre de Ouagadougou

// Données des bus (exemple)
const buses = [
    { id: 1, numero: "123", depart: "Gare Centrale", heure: "08:00", image: "/assets/images/1.jpg", lat: 48.8566, lng: 2.3522 },
    { id: 2, numero: "456", depart: "Aéroport", heure: "09:30", image: "/assets/images/2.jpg", lat: 48.8534, lng: 2.3488 },
    // Ajoutez plus de bus ici
];

export default function Home() {
    const params = useParams();
    const id = params.slug;
    const [bus, setBus] = useState(null);

    const [map, setMap] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);

    // Points d'arrêt du bus
    const stopPoints = [
        { lat: 12.3714277, lng: -1.5196288, name: "Arrêt 1" },
        { lat: 12.3814277, lng: -1.5296288, name: "Arrêt 2" },
        { lat: 12.3914277, lng: -1.5396288, name: "Arrêt 3" },
        { lat: 12.4014277, lng: -1.5496288, name: "Arrêt 4" }
    ];

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDKn0RT7RqxqkIBSnMckyIil7P-shK9xqg',
        libraries: ['places'],
    });

    const onLoad = useCallback((map) => {
        setMap(map);
        calculateRoute();
    }, []);

    const calculateRoute = async () => {
        if (!window.google) return;

        const directionsService = new window.google.maps.DirectionsService();
        const waypoints = stopPoints.slice(1, -1).map(point => ({
            location: new window.google.maps.LatLng(point.lat, point.lng),
            stopover: true
        }));

        const results = await directionsService.route({
            origin: new window.google.maps.LatLng(stopPoints[0].lat, stopPoints[0].lng),
            destination: new window.google.maps.LatLng(
                stopPoints[stopPoints.length - 1].lat,
                stopPoints[stopPoints.length - 1].lng
            ),
            waypoints: waypoints,
            travelMode: window.google.maps.TravelMode.DRIVING,
        });

        setDirectionsResponse(results);
    };

    if (!isLoaded) {
        return <div className="h-screen flex items-center justify-center">Chargement...</div>;
    }


    const mapStyles = {
        width: '100%',
        height: '70vh',
    }


    return (
        <Layout headerStyle={3} footerStyle={3}>
            <div className="min-h-screen bg-gray-100 p-4">
                <div data-aos="fade-up"
                     data-aos-duration={1500} data-aos-offset={50}>
                    <div className="blog-one__single shadow">
                        <div className="blog-one__single-img">
                            <img src="/assets/images/3.jpg" alt="" className={'w-full h-50'}/>
                        </div>
                        <div className="blog-one__single-content">
                            <div className="date-box">
                                <h2>800</h2>
                            </div>
                            <div className="blog-one__single-content-inner">
                                <ul className="meta-box">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location1"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>Karpala</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-clock"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>6h : 00</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>Ligne du bus</p>
                                        </div>
                                    </li>
                                </ul>
                                <h2>Nom donner au bus</h2>
                                <p>Description du bus et autres informations </p>
                            </div>
                        </div>
                    </div>
                    <BusRoute/>
                </div>
            </div>
        </Layout>

    );
}
