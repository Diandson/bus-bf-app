'use client'

import React, {useState} from 'react';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import Link from "next/link";
import SectionHeading from "@/components/SectionHeader";

const fakeBusData = [
    {id: 1, departTime: '08:00', duration: '1h 15m', busName: 'PlaniBus Ligne 1'},
    {id: 2, departTime: '09:30', duration: '1h 00m', busName: 'PlaniBus Express'},
    {id: 3, departTime: '11:00', duration: '1h 30m', busName: 'PlaniBus Ligne 2'},
];

const BusSchedule = () => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState(new Date());
    const [buses, setBuses] = useState(fakeBusData);

    const formattedDate = format(date, "EEEE dd MMMM yyyy", {locale: fr});

    const handleSearch = () => {
        // Here, in a real application, you would make an API call to fetch bus data
        // based on the departure, arrival, and date.
        // For now, we're using the fake data.
        console.log(`Searching for buses from ${departure} to ${arrival} on ${formattedDate}`);
    };

    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-full" data-aos="fade-up"
             data-aos-duration={1500} data-aos-offset={50}>
            <SectionHeading SectionTitle={'Planifier un déplacement'}
                            variant={"text-start"}/>
            {/* Search Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Departure Input */}
                    <div className="space-y-3" data-aos="fade-up"
                         data-aos-duration={1500} data-aos-offset={50}>
                        <label className="text-base font-semibold text-gray-700 flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            </svg>
                            Lieu de Départ
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-100 rounded-xl text-gray-700 placeholder-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition duration-200"
                                placeholder="D'où partez-vous?"
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Arrival Input */}
                    <div className="space-y-3" data-aos="fade-up"
                         data-aos-duration={1500} data-aos-offset={50}>
                        <label className="text-base font-semibold text-gray-700 flex items-center gap-2">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            </svg>
                            Lieu d'arrivée
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-gray-50 border-2 border-gray-100 rounded-xl text-gray-700 placeholder-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-100 transition duration-200"
                                placeholder="Où allez-vous?"
                                value={arrival}
                                onChange={(e) => setArrival(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <div className="mt-8 flex justify-center">
                    <button className="px-3 py-2 bg-green-600 hover:bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                        Rechercher
                    </button>
                </div>
            </div>

            {/* Results Section */}
            {buses.length > 0 && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Bus disponibles
                    </h2>

                    <div className="space-y-4">
                        {buses.map((bus, index) => (
                            <div key={bus.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300" data-aos="fade-up"
                                 data-aos-duration={1500} data-aos-offset={50}>
                                <div className="flex items-center gap-6">
                                    {/* Bus Number */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Bus Info */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{bus.busName}</h3>
                                        <div className="flex items-center gap-6 text-gray-600">
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                Départ: {bus.departTime}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                Durée: {bus.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrival Info */}
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-blue-600 mb-1">{bus.arrivalTime}</div>
                                        <div className="text-sm text-gray-500">Arrivée prévue dans</div>
                                        <div className="flex items-center justify-end mt-2 text-green-600 font-semibold">
                                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            20 minutes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* No Results */}
            {buses.length === 0 && (
                <div className="bg-white rounded-2xl p-8 text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun bus trouvé</h3>
                    <p className="text-gray-500">Aucun bus disponible pour cet itinéraire et cette date.</p>
                </div>
            )}
        </div>
    );
};

export default BusSchedule;
