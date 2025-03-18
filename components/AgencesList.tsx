'use client';

import React, {useState} from 'react';

const salesPointsData = [
    {
        city: 'Ouagadougou',
        locations: [
            {
                name: 'Siège Social',
                address: '2257, Avenue du Sanmatenga (Somgandé), Secteur 19',
                hours: 'Tous les jours : 7h30 - 18h00',
                phone1: '+226 25355555',
                phone2: '+226 25357701',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
                postalCode: '01 BP 5665 Ouagadougou 01',
            },
            {
                name: 'Place Naaba Koom',
                address: 'Coté Sud gare Sitarail (Centre Ville)',
                hours: 'Lun - Ven : 6h00 - 18h00, Sam : 6h00 - 12h00',
                phone1: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
                postalCode: '01 BP 5665 Ouagadougou 01',
            },
            {
                name: 'Université Joseph KI ZERBO',
                address: 'Coté Nord du Restaurant Universitaire',
                hours: 'Lun - Ven : 8h00 - 14h00',
                phone1: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
                postalCode: '01 BP 5665 Ouagadougou 01',
            },
            {
                name: 'Université Thomas SANKARA',
                address: "Non loin de l'entrée principale du campus",
                hours: 'Lun - Ven : 8h00 - 16h00',
                phone1: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
                postalCode: '01 BP 5665 Ouagadougou 01',
            },
            {
                name: 'Balkuy',
                address: 'Coté Nord de la mosquée Turque de Balkuy',
                hours: 'Tous les jours : 7h30 - 18h00',
                phone1: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
                postalCode: '01 BP 5665 Ouagadougou 01',
            },
        ],
    },
    {
        city: 'Bobo Dioulasso',
        locations: [
            {
                name: "Direction Régionale de l'Ouest",
                address: "Boulevard de l'indépendance (Secteur 22)",
                hours: 'Lun - Ven : 8h00 - 16h00',
                phone1: '+226 20980000',
                phone2: '+226 54939393',
                phone3: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
            },
            {
                name: 'Tiefo Amoro',
                address: 'Place Tiéfo Amoro',
                hours: 'Tous les jours : 7h30 - 18h00',
                phone1: '+226 20980000',
                phone2: '+226 54939393',
                phone3: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
            },
        ],
    },
    {
        city: 'Koudougou',
        locations: [
            {
                name: 'Agence SOTRACO Koudougou',
                address: 'Route Nationale (RN) 14',
                hours: 'Tous les jours : 7h30 - 18h00',
                phone1: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
            },
        ],
    },
    {
        city: 'Ouahigouya',
        locations: [
            {
                name: 'Agence SOTRACO Ouahigouya',
                address: "Centre ville derrière la maison d'Arrêt et de Correction",
                hours: 'Lun - Sam : 8h00 - 18h00',
                phone1: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
            },
        ],
    },
    {
        city: 'DEDOUGOU',
        locations: [
            {
                name: 'Agence SOTRACO Dédougou',
                address:
                    'Centre ville au niveau de la Direction Régionale du Ministère des Transports de la Mobilité Urbaine et de la Sécurité Routière',
                hours: 'Lun - Sam : 8h00 - 18h45',
                phone1: '+226 25356787',
                whatsapp: '+226 52501818',
                email: 'contact@sotraco.bf',
                website: 'www.sotraco.bf',
            },
        ],
    },
];

const AgencesList = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [openCities, setOpenCities] = useState({})

    const toggleCity = (cityIndex: number) => {
        setOpenCities((prev) => ({
            ...prev,
            [cityIndex]: !prev[cityIndex]
        }))
    }

    return (
        <div className="w-full p-8 bg-white card">
            {/* Search Bar */}
            <div className="flex justify-end">
                <div className="relative w-full max-w-md">
                    <input type="text" placeholder="Rechercher ..."
                        className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300">
                        <span className="icon-search text-xl"></span>
                    </button>
                </div>
            </div>

            {salesPointsData.map((cityData, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden m-2"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                >
                    <button
                        onClick={() => toggleCity(index)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-2xl font-bold text-gray-900 text-uppercase">{cityData.city}</span>
                        <svg
                            className={`w-6 h-6 transform transition-transform ${openCities[index] ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div className={`transition-all duration-300 ease-in-out ${openCities[index] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <div className={'grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4 p-6'}>
                            {cityData.locations.map((location, locationIndex) => (
                                <div key={locationIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-semibold text-gray-900">{location.name}</span>
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">Point de vente</span>
                                    </div>

                                    <div className="space-y-3 text-gray-600">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                            <address className="not-italic text-sm">
                                                {location.address}<br/>
                                            </address>
                                        </div>
                                        <div className={'flex'}>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <p className={'ms-1'}>{location.hours}</p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                            <a href={`tel:${location.phone1}`} className="text-blue-600 hover:underline">{location.phone1}</a>
                                            <svg className="inline-block w-5 h-5 mr-1 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>

                                            <a href={`tel:${location.phone1}`} className="text-blue-600 hover:underline">{location.phone1}</a>
                                        </div>
                                    </div>

                                    <div className="flex mt-6">
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <a href={`mailto:${location.email}`}
                                           className="inline-flex items-center text-sm text-green-600 hover:text-green-700">
                                            <span>{location.email}</span>
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AgencesList;
