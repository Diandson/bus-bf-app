'use client'


const ReseauVente = () => {
    return (
        <div className="w-full p-6">
            {/* Header Section */}
            <div className="mb-12">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Points de service STO",
                            icon: "store",
                            description: "Émission de cartes Multi personnalisées, vente des titres et rechargement"
                        },
                        {
                            title: "Points de vente",
                            icon: "cash-register",
                            description: "Vente des titres occasionnels et rechargement"
                        },
                        {
                            title: "Dépositaires de billets",
                            icon: "ticket",
                            description: "Vente de billets uniquement"
                        }
                    ].map((type, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-green-100 rounded-full">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800">{type.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{type.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters Section */}
            <div className="flex flex-wrap gap-4 mb-8" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                <select className="px-4 py-2 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Filtrer par secteur</option>
                    <option value="aylmer">Aylmer</option>
                    <option value="hull">Hull</option>
                    <option value="gatineau">Gatineau</option>
                </select>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((location, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800">Brunet Plus</h3>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                Point de vente
                            </span>
                        </div>

                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <address className="not-italic text-sm">
                                    795, boul. Wilfrid-Lavigne<br/>
                                    Gatineau, Québec J9J 1V2
                                </address>
                            </div>

                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <a href="tel:819-684-8222" className="text-blue-600 hover:underline">819 684-8222</a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-green-600 hover:text-green-700"
                            >
                                <span>Voir sur Google Maps</span>
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReseauVente;
