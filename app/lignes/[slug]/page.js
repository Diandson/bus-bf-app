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
import {BusData} from "@/app/service/data";

const center = { lat: 12.3714277, lng: -1.5196288 }; // Centre de Ouagadougou

// Données des bus (exemple)
const buses = [
    { id: 1, numero: "123", depart: "Gare Centrale", heure: "08:00", image: "/assets/images/1.jpg", lat: 48.8566, lng: 2.3522 },
    { id: 2, numero: "456", depart: "Aéroport", heure: "09:30", image: "/assets/images/2.jpg", lat: 48.8534, lng: 2.3488 },
    // Ajoutez plus de bus ici
];

export default function Home() {
    const params = useParams();
    const id = parseInt(params.slug);

    // Points d'arrêt du bus
    const stopPoints = [
        { lat: 12.3714277, lng: -1.5196288, name: "Arrêt 1" },
        { lat: 12.3814277, lng: -1.5296288, name: "Arrêt 2" },
        { lat: 12.3914277, lng: -1.5396288, name: "Arrêt 3" },
        { lat: 12.4014277, lng: -1.5496288, name: "Arrêt 4" }
    ];

    const dataBus = BusData.find(bus => bus.id === id);

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
                                <h2>{dataBus.number}</h2>
                            </div>
                            <div className="blog-one__single-content-inner">
                                <ul className="meta-box">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location1"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>{dataBus.ligne}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-clock"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>{dataBus.departureTime}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>{dataBus.outboundRoute}</p>
                                        </div>
                                    </li>
                                </ul>
                                <h2>{dataBus.name}</h2>
                                <p>Description du bus et autres informations </p>
                            </div>
                        </div>
                    </div>
                    <BusRoute bus={dataBus} />
                </div>
            </div>
        </Layout>
    );
}
