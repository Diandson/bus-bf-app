'use client'

import Layout from "@/components/layout/Layout";
import Tarification from "@/components/Tarification";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeader";
import React, {useState} from "react";
import Link from "next/link";

export default function Tarifs() {

    const [isOpen, setOpen] = useState(false)
    const [isAccordion, setIsAccordion] = useState(1)

    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <Layout headerStyle={3} footerStyle={3}>\
            <SectionHeading SectionTitle={'Nos tarifs'}
                            variant={"text-start"}/>
            {/* faqs 1 */}
            <section className="bg-gray-50">
                <div className="w-full p-2 m-2">
                    <div className="space-y-4 mb-4 p-2" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <button onClick={() => handleAccordion(1)} className="w-full px-6 py-4 flex items-center justify-between text-left border-b">
                                <div className="flex items-center gap-4">
                                        <span
                                            className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center">
                                            <svg className="w-6 h-6 text-green-500 font-bold"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                                />
                                            </svg>
                                        </span>
                                    <h3 className="text-2xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800">Tarif régulier</h3>
                                </div>
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center">
                                    <svg
                                        className={`w-5 h-5 font-bold text-green-600 transform transition-transform duration-300 ${isAccordion === 1 ? 'rotate-180' : ''}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </span>
                            </button>

                            <div className={`${isAccordion === 1 ? 'block' : 'hidden'} px-8 pb-4-2 border-t border-gray-200`}>
                                <div className="w-full my-4">
                                    {/* Pricing Cards Grid */}
                                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                                        {/* Monthly Subscription Card */}
                                        <div
                                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-xl font-bold text-gray-800">Abonnement mensuel</h3>
                                                <span className="text-xl font-bold text-green-600">30 000 F/mois</span>
                                            </div>
                                            <ul className="space-y-3 text-gray-600">
                                                <li className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none"
                                                         stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                    </svg>
                                                    Déplacements illimités
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Day Passes Section */}
                                        <div
                                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-4">Laissez-passer</h3>
                                            <div className="space-y-4">
                                                <div
                                                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                    <span>1 jour</span>
                                                    <span className="font-bold text-green-600">4 000 F</span>
                                                </div>
                                                <div
                                                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                    <span>3 jours</span>
                                                    <span className="font-bold text-green-600">6 000 F</span>
                                                </div>
                                                <div
                                                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                    <span>7 jours</span>
                                                    <span className="font-bold text-green-600">10 000 F</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mb-4 p-2">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <button onClick={() => handleAccordion(2)} className="w-full px-6 py-4 flex items-center justify-between text-left border-b">
                                <div className="flex items-center gap-4">
                                        <span
                                            className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center">
                                            <svg className="w-6 h-6 text-green-500 font-bold"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                                />
                                            </svg>
                                        </span>
                                    <h3 className="text-2xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800">Tarif adultes</h3>
                                </div>
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center">
                                    <svg
                                        className={`w-5 h-5 font-bold text-green-600 transform transition-transform duration-300 ${isAccordion === 1 ? 'rotate-180' : ''}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </span>
                            </button>

                            <div className={`${isAccordion === 2 ? 'block' : 'hidden'} px-8 pb-4-2 border-t border-gray-200`}>
                                <div className="w-full p-6">

                                    {/* Programs Grid */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* FIDELITÉ Program Card */}
                                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                            <div className="p-4 text-white">
                                                <div className="flex justify-between">
                                                    <span className="text-xl font-bold text-black">Programme fidelité</span>
                                                    <span className="text-xl font-bold ml-2 text-green-600">25 000 F / mois</span>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-center mb-4">
                                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                                                        Abonnement annuel
                                                    </span>
                                                </div>

                                                <ul className="space-y-4">
                                                    {[
                                                        "Déplacement illimité toute l'année!",
                                                        "10% de rabais sur le tarif mensuel",
                                                        "Carte Multi personnalisée requise",
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                            </svg>
                                                            <span className="text-gray-600">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* ECHO Program Card */}
                                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                            <div className="p-4 text-white">
                                                <div className="flex justify-between">
                                                    <span className="text-xl font-bold text-black">Programme Economique</span>
                                                    <span className=" text-xl ml-2 text-green-600">15 000 F / mois</span>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-center mb-4">
                                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                                                        Tarif réduit
                                                    </span>
                                                </div>

                                                <ul className="space-y-4">
                                                    {[
                                                        "Déplacements illimités mensuels",
                                                        "Économie de 5 500f sur tarif régulier",
                                                        "Pour résidents sous seuil de faible revenu",
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                            </svg>
                                                            <span className="text-gray-600">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* PME Section */}
                                        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-gray-700">Points de recharge</h4>
                                                <ul className="space-y-3">
                                                    {[
                                                        "En ligne (48h avant le voyage)",
                                                        "Points de service",
                                                        "Points de vente",
                                                        "Montant entre 3 000F et 15 000F",
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                            </svg>
                                                            <span className="text-gray-600">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mb-4 p-2">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <button onClick={() => handleAccordion(3)} className="w-full px-6 py-4 flex items-center justify-between text-left border-b">
                                <div className="flex items-center gap-4">
                                        <span
                                            className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center">
                                            <svg className="w-6 h-6 text-green-500 font-bold"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                                />
                                            </svg>
                                        </span>
                                    <h3 className="text-2xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800">Tarif étudiant</h3>
                                </div>
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold flex items-center justify-center">
                                    <svg
                                        className={`w-5 h-5 font-bold text-green-600 transform transition-transform duration-300 ${isAccordion === 1 ? 'rotate-180' : ''}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </span>
                            </button>

                            <div className={`${isAccordion === 3 ? 'block' : 'hidden'} px-8 pb-4-2 border-t border-gray-200`}>
                                <div className="w-full">

                                    {/* Monthly Subscription Section */}
                                    <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 mt-2">
                                        <div className="p-4 text-white">
                                            <div className="flex justify-between">
                                                <span className="text-xl font-bold text-black">Abonnement mensuel </span>
                                                <span className="text-xl font-bold text-green-600">8 000 F/mois</span>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-gray-700">Avantages</h3>
                                                <ul className="space-y-3">
                                                    {[
                                                        "Déplacements illimités mensuels",
                                                        "Carte personnalisée gratuite",
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                            </svg>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-gray-50 rounded-xl p-2">
                                                <h3 className="font-semibold text-gray-700 mb-4">Documents requis</h3>
                                                <ul className="space-y-3">
                                                    {[
                                                        "Pièce d'identité avec photo",
                                                        "Attestation d'études à temps complet"
                                                    ].map((item, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                                            </svg>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    );
}
