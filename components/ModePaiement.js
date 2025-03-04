'use client'


export default function ModePaiement() {
  return (
    <>
        <div className="w-full p-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" >
                {/* Multi Personnalisée Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-green-600 p-6 text-white">
                        <div className="flex items-center gap-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4z"/>
                            </svg>
                            <h2 className="text-xl font-bold">Carte Multi personnalisée</h2>
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                            <span>Carte à puce rechargeable avec photo</span>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Usage fréquent ou occasionnel",
                                "Abonnement + Porte-monnaie électronique",
                                "Tarif réduit selon statut",
                                "Correspondance de 2 heures"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                            <h3 className="font-semibold text-gray-700 mb-3">Points de recharge</h3>
                            <ul className="space-y-2">
                                {[
                                    "En ligne (48h avant)",
                                    "Points de service",
                                    "Points de vente"
                                ].map((point, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                                        </svg>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Payment Methods Cards */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-blue-600 p-6 text-white">
                        <div className="flex items-center gap-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                            <h2 className="text-xl font-bold">Paiement comptant</h2>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="text-3xl font-bold text-blue-600 mb-4">3 000 F<span className="text-sm text-gray-600 ml-2">par passage</span></div>
                        <ul className="space-y-3">
                            {[
                                "Montant exact exigé",
                                "Billets non acceptés",
                                "Pour déplacements spontanés"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Privilege Cards */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="bg-purple-600 p-6 text-white">
                        <div className="flex items-center gap-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                            </svg>
                            <h2 className="text-xl font-bold">Cartes Privilège</h2>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Assistance visuelle",
                                    description: "Accompagnateur voyage gratuitement"
                                },
                                {
                                    title: "Animal d'assistance",
                                    description: "Permet d'être accompagné d'un animal"
                                }
                            ].map((card, index) => (
                                <div key={index} className="p-4 bg-purple-50 rounded-xl">
                                    <h3 className="font-semibold text-purple-700 mb-2">{card.title}</h3>
                                    <p className="text-gray-600 text-sm">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
