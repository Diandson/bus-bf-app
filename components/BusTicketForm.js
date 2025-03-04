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

    const prices = [1000, 2000, 3000, 4000, 5000, 6000];
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
                        <h3 className="text-xl font-semibold text-gray-700 mb-4" data-aos="fade-up"
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={formData.cni}
                                    onChange={(e) => setFormData({...formData, cni: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Sélection du prix */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="md:text-xl sm:text-lg xl:text-2xl font-semibold text-gray-700 mb-6" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
                            Sélectionnez votre tarif
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                            {prices.map((price) => (
                                <div  key={price}
                                    onClick={() => setFormData({...formData, selectedPrice: price})}
                                    className={`cursor-pointer rounded-lg p-4 text-center transition-all ${
                                        formData.selectedPrice === price
                                            ? 'bg-green-600 text-white shadow-lg scale-105'
                                            : 'bg-gray-50 hover:bg-gray-100'
                                    }`}>
                                    <div className="md:text-xl xl:text-2xl font-bold">{price} FCFA</div>
                                    {formData.selectedPrice === price && (
                                        <CheckCircleIcon className="h-6 w-6 mx-auto mt-2" />
                                    )}
                                </div>
                            ))}
                        </div>
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
