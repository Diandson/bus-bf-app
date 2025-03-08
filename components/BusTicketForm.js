'use client';

import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const BusTicketForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        cni: '',
        selectedPrice: null,
        paymentMethod: null
    });

    const busLines = [
        {
            id: 1,
            name: "Ligne 1",
            description: "Centre-ville - Université",
            price: 1000
        },
        {
            id: 2,
            name: "Ligne 2",
            description: "Gare Centrale - Zone Industrielle",
            price: 2000
        },
        {
            id: 3,
            name: "Ligne 3",
            description: "Aéroport - Centre Commercial",
            price: 3000
        },
        {
            id: 4,
            name: "Ligne 4",
            description: "Quartier Nord - Plage",
            price: 4000
        },
        {
            id: 5,
            name: "Ligne 5",
            description: "Port - Marché Central",
            price: 5000
        }
    ];
    const prices = [1000, 2000, 3000, 4000, 5000];
    const paymentMethods = [
        { id: 'orange', name: 'Orange Money', logo: '/assets/images/orange.png' },
        { id: 'moov', name: 'Moov Money', logo: '/assets/images/moov.png' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire:', formData);
    };

    return (
        <div className="w-full p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className={'grid grid-cols-2 gap-4'}>
                    {/* Informations personnelles */}
                    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                        <h3 className="md:text-xl sm:text-lg xl:text-2xl  font-semibold text-gray-700 mb-4" data-aos="fade-up"
                            data-aos-duration={1000} data-aos-offset={50}>
                            Informations personnelles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                />
                            </div>

                            <div data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                />
                            </div>

                            <div data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>

                            <div data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Numéro CNI
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    value={formData.cni}
                                    onChange={(e) => setFormData({...formData, cni: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Sélection du prix */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="md:text-xl sm:text-lg xl:text-2xl font-semibold text-gray-700 mb-6" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
                            Sélectionnez votre ligne
                        </h3>
                        <div className="relative" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                            <select value={formData.selectedLine}
                                onChange={(e) => setFormData({...formData, selectedLine: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer text-lg font-semibold">
                                <option value="" disabled>Sélectionnez une ligne</option>
                                {busLines.map((line) => (
                                    <option key={line.id} value={line.id}>
                                        {line.name} - {line.description} ({line.price} FCFA)
                                    </option>
                                ))}
                            </select>

                            {/* Custom arrow icon */}
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/*<div className="grid grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>*/}
                        {/*    <div onClick={() => setFormData({...formData, selectedPrice: price})}*/}
                        {/*          className={`cursor-pointer rounded-lg p-4 text-center transition-all ${*/}
                        {/*              formData.selectedPrice === price*/}
                        {/*                  ? 'bg-green-600 text-white shadow-lg scale-105'*/}
                        {/*                  : 'bg-gray-50 hover:bg-gray-100'*/}
                        {/*          }`}>*/}
                        {/*        <div className="md:text-xl xl:text-2xl font-bold">{price} FCFA</div>*/}
                        {/*        {formData.selectedPrice === price && (*/}
                        {/*            <CheckCircleIcon className="h-6 w-6 mx-auto mt-2" />*/}
                        {/*        )}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/* Mode de paiement */}
                <div className="bg-white col-4 rounded-xl shadow-lg p-6">
                    <h3 className="text-xl sm:text-lg xl:text-2xl font-semibold text-gray-700 mb-6" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
                        Mode de paiement
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                        {paymentMethods.map((method) => (
                            <div key={method.id}
                                 onClick={() => setFormData({...formData, paymentMethod: method.id})}
                                 className={`cursor-pointer rounded-xl p-6 transition-all flex items-center space-x-4 ${
                                     formData.paymentMethod === method.id
                                         ? 'bg-blue-50 border-2 border-green-500'
                                         : 'border-2 border-gray-200 hover:border-green-200'
                                 }`}>
                                <img src={method.logo} alt={method.name} className="w-12 h-12 object-contain"/>
                                <span className="font-semibold sm:text-lg xl:text-2xl lg:text-xl">{method.name}</span>
                                {formData.paymentMethod === method.id && (
                                    <CheckCircleIcon className="h-6 w-6 text-green-500 ml-auto" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'flex justify-end'}>
                    <button data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50} type="submit"
                            className="bg-green-600 text-white py-2 px-3 rounded-md font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center gap-2">
                        <CheckCircleIcon className="h-6 w-6" />
                        Confirmer le paiement
                    </button>
                </div>

            </form>
        </div>
    );
};

export default BusTicketForm;
